/** @format */

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
	const computer = useGLTF("./desktop_pc/scene.gltf");

	return (
		<mesh>
			<hemisphereLight
				intensity={3.15}
				groundColor='black'
			/>
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={2024}
			/>
			<pointLight
				intensity={5}
				angle={2}
			/>
			<primitive
				object={computer.scene}
				scale={isMobile ? 0.5 : 0.7}
				position={isMobile ? [0, -3, -1] : [0, -3.25, -1.5]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		//adding evnt listener to change the screen size
		const mediaQuery = window.matchMedia("(max-width: 500px)");

		// sets the intial value of state variable
		setIsMobile(mediaQuery.matches);

		// defines call back fn to handle changes of media query
		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};

		//we add call back fn as a listener for changes to media query
		mediaQuery.addEventListener("change", handleMediaQueryChange);

		//we remove listner once component is unmounted
		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<Canvas
			frameloop='demand'
			shadows
			dpr={[1, 2]}
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers isMobile={isMobile} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
