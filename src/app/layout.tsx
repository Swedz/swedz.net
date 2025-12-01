import type {Metadata} from "next";
import React from "react";

import {JetBrains_Mono} from "next/font/google";

import "./globals.css";

import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "Swedz's Corner"
};

export default function RootLayout({children}: Readonly<{
	children: React.ReactNode;
}>)
{
	return (
		<html lang="en">
		<body className={`${jetbrainsMono.variable} antialiased`}>
		{children}
		</body>
		</html>
	);
}
