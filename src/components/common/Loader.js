import React from "react";
import LoaderSpinner from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { loaderCfg } from "../../constants/common";

export default function Loader() {
	return <LoaderSpinner type={loaderCfg.type} color={loaderCfg.color} height={loaderCfg.height} width={loaderCfg.width} timeout={loaderCfg.timeout} />;
}
