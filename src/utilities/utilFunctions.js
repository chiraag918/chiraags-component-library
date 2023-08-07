export const isNil = (data) => data == null;

export const isObjectAndHasData = (value) =>
	!isNil(value) && typeof value === "object" && Object.keys(value).length > 0;

export const isArrayAndHasData = (value) =>
	!isNil(value) && Array.isArray(value) && value.length > 0;
