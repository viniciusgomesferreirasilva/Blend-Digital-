import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { GlobalContextProviders } from "./components/_globalContextProviders";
import Home from "./pages/_index";
import BlendNews from "./pages/blend-news";
import "./base.css";
createRoot(document.getElementById("root")!).render(<BrowserRouter><GlobalContextProviders><Helmet><title>Blend Digital</title></Helmet><Routes><Route path="/" element={<Home/>}/><Route path="/blend-news" element={<BlendNews/>}/><Route path="*" element={<Home/>}/></Routes></GlobalContextProviders></BrowserRouter>);
