import { Accordion } from "./components/Accordion";
import { CardWrapperComponent } from "./components/CardWrapper";
import { Loader } from "./components/Loader";
import { Modal } from "./components/Modal";
import { SwappableWidget } from "./components/SwappableWidget";
import { VideoPlayer } from "./components/VideoPlayer";
import { Button } from "./components/Button";

const returnComponents = () => {
	return {
		Accordion: Accordion,
		CardWrapper: CardWrapperComponent,
		Loader: Loader,
		Modal: Modal,
		SwappableWidget: SwappableWidget,
		VideoPlayer: VideoPlayer,
		Button: Button,
	};
};
export default returnComponents();
