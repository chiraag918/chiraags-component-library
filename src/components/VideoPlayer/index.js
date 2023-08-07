import React, { useEffect, useRef, useState } from "react";
import "shaka-player/dist/controls.css";
import shaka from "shaka-player/dist/shaka-player.ui";
import "./VideoPlayer.scss";
import { FallbackMessage } from "../FallbackMessage";
import fallbackIcon from "./fallbackIcon.svg";
import { ERROR_API_FAIL } from "../../constants/appConstants";
import { isNil } from "../../utilities/utilFunctions";

export const VideoPlayer = ({
	source,
	thumbnail,
	videoId,
	seekTime = 0,
	saveVideoProgress,
	saveVideoProgressLocal,
	customClass = "",
}) => {
	const uiContainerRef = useRef(null);
	const videoRef = useRef(null);
	const controller = useRef({});
	const timerRef = useRef(null);
	const timerRefLocal = useRef(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (!videoRef.current) {
			setError(true);
			console.error("video element not loaded");
			return;
		}
		// Check to see if the browser supports the basic APIs Shaka needs.
		if (shaka.polyfill && typeof shaka.polyfill.installAll === "function") {
			shaka.polyfill.installAll();
		} else {
			setError(true);
			console.warn("Polyfills.installAll not available");
		}

		if (!shaka.Player.isBrowserSupported()) {
			// This browser does not have the minimum set of APIs we need.
			setError(true);
			console.error("Browser not supported for Shaka player!");
			return;
		}
		const player = new shaka.Player(videoRef.current);

		const ui = new shaka.ui.Overlay(
			player,
			uiContainerRef.current,
			videoRef.current
		);

		//shaka player UI config
		const config = {
			addBigPlayButton: true,
			overflowMenuButtons: ["quality", "playback_rate", "captions"],
			addSeekBar: true,
			clearBufferOnQualityChange: true,
			enableTooltips: true,
			controlPanelElements: [
				"time_and_duration",
				"mute",
				"volume",
				"spacer",
				"rewind",
				"fast_forward",
				"overflow_menu",
				"fullscreen",
			],
		};

		ui.getControls();
		ui.configure(config);

		// Store Shaka's API in order to expose it as a handle.
		controller.current = { player, ui, videoElement: videoRef.current };

		if (controller.current.videoElement.hasAttribute("controls")) {
			controller.current.videoElement.removeAttribute("controls");
		}

		return () => {
			player.destroy();
			ui.destroy();
		};
	}, []);

	// Load the source url when we have one.
	useEffect(() => {
		const { player, ui } = controller.current;
		if (player) {
			initPlayer(player, source, ui);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [source]);

	useEffect(() => {
		return () => {
			clearInterval(timerRef.current);
			clearInterval(timerRefLocal.current);
		};
	}, []);

	async function initPlayer(player, manifestUri, ui) {
		// Try to load a manifest uri in an asynchronous process.
		try {
			registerVideoListeners();
			await player.load(manifestUri, seekTime);
			// This runs if the asynchronous load is successful.
		} catch (error) {
			// onError is executed if the asynchronous load fails.
			console.error("DS Error code", error.code, "object", error);
		}
	}

	const registerVideoListeners = () => {
		videoRef.current.addEventListener("pause", onPause);
		videoRef.current.addEventListener("play", onPlay);
	};

	const onPause = (event) => {
		clearInterval(timerRef.current);
		clearInterval(timerRefLocal.current);
	};

	const onPlay = (event) => {
		const saveVideoProgressUtil = (saveVideoProgress) => {
			if (
				videoRef.current &&
				videoRef.current.currentTime &&
				!isNaN(videoRef.current.duration)
			) {
				const data = {
					videoId: videoId,
					currentTime: videoRef.current.currentTime,
					duration: videoRef.current.duration,
				};
				saveVideoProgress(data);
			}
		};
		timerRef.current =
			!isNil(saveVideoProgress) &&
			setInterval(() => {
				saveVideoProgressUtil(saveVideoProgress);
			}, 10000);
		timerRefLocal.current =
			!isNil(saveVideoProgressLocal) &&
			setInterval(() => {
				saveVideoProgressUtil(saveVideoProgressLocal);
			}, 1000);
	};

	return (
		<div ref={uiContainerRef} className={`videoPlayer__wrapper ${customClass}`}>
			{error ? (
				<FallbackMessage message={ERROR_API_FAIL} icon={fallbackIcon} />
			) : (
				<video
					ref={videoRef}
					src={source}
					style={{ height: "100%", width: "100%", pointerEvents: "none" }}
					poster={thumbnail}
					autoPlay
				/>
			)}
		</div>
	);
};
