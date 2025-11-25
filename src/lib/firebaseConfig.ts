"use client"

import { getAnalytics } from "firebase/analytics"
// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDfbLI92DAN2Q_aJhxzuszPam3BuD79PVo",
	authDomain: "mrtindanzor-cdf08.firebaseapp.com",
	projectId: "mrtindanzor-cdf08",
	storageBucket: "mrtindanzor-cdf08.firebasestorage.app",
	messagingSenderId: "525284184504",
	appId: "1:525284184504:web:4bee4f3cc1bfa17301bf4d",
	measurementId: "G-JQF7RTY6BJ",
}

// Initialize Firebase
const environment = process.env.NODE_ENV
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0]

if (typeof window !== "undefined" && environment === "production") {
	getAnalytics(app)
}

export { app }
