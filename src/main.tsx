import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './site'
import type { BlogPost } from './blogPosts'
import './style.css'

const root = document.getElementById('root')!
const blogData = document.getElementById('cap-blog-data')?.textContent
const initialBlogPosts = blogData ? JSON.parse(blogData) as BlogPost[] : undefined
const app = <React.StrictMode><BrowserRouter><App initialBlogPosts={initialBlogPosts} /></BrowserRouter></React.StrictMode>

if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
