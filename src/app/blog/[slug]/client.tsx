"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  ArrowLeft,
  Clock,
  Share2,
  Check,
  List,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { MdxRemoteRender } from "@/components/mdx";
import Image from "next/image";
import type { Post } from "@/lib/mdx";
import { toast } from "sonner";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export default function BlogPostClient({ post }: { post: Post }) {
  const [readingTime, setReadingTime] = useState("5 min");
  const [copied, setCopied] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [showToc, setShowToc] = useState(true);
  const tocRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const words = post.content.split(/\s+/).length;
    const time = Math.ceil(words / 200);
    setReadingTime(`${time} min read`);
  }, [post.content]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -70% 0%" }
    );

    // Ensuring we're in client side
    if (typeof window !== "undefined") {
      // Add smooth scrolling behavior to the document
      document.documentElement.style.scrollBehavior = "smooth";

      const elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      observer.disconnect();
      // Clean up the scroll behavior
      if (typeof window !== "undefined") {
        document.documentElement.style.scrollBehavior = "";
      }
    };
  }, []);

  // Enhanced TOC generation for more consistent ID matching
  const generateTOC = () => {
    // Extract headers from the markdown content
    const headers = post.content.match(/(#{1,6})\s+(.*?)$/gm) || [];

    return headers.map((header) => {
      // Get level based on number of # symbols
      const level = (header.match(/^#+/) || [""])[0].length;

      // Extract the text content of the header
      let text = header.replace(/^#+\s+/, "").trim();

      // Process the text to handle markdown formatting in headers
      // Remove markdown formatting like **, *, `, etc.
      text = text
        .replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold
        .replace(/\*(.*?)\*/g, "$1") // Remove italic
        .replace(/`(.*?)`/g, "$1") // Remove code
        .replace(/\[(.*?)\]\(.*?\)/g, "$1"); // Remove links but keep text

      // Generate ID in the same way as the mdx-remote-render.tsx component does
      const id = text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "")
        .replace(/^-+|-+$/g, ""); // Trim dashes from start and end

      return { text, id, level };
    });
  };

  const handleTocItemClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // On mobile, optionally hide TOC after clicking
      if (window.innerWidth < 768) {
        setShowToc(false);
      }

      // Scroll to the element
      element.scrollIntoView({ behavior: "smooth" });

      // Set the active ID
      setActiveId(id);
    } else {
      console.log(`Element with id "${id}" not found`);
    }
  };

  const toc = generateTOC();

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Main content area */}
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            ref={articleRef}
          >
            {/* Back button with hover effect */}
            <motion.div variants={fadeInUp}>
              <Button variant="ghost" className="mb-8 group" asChild>
                <Link href="/blog" className="flex items-center gap-1">
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  <span>Back to blogs</span>
                </Link>
              </Button>
            </motion.div>

            {/* Enhanced Header section with animation */}
            <motion.div variants={fadeInUp} className="mb-12">
              <div className="relative">
                {/* Enhanced backdrop */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background/60 to-background/90 backdrop-blur-sm rounded-3xl border border-border/20 shadow-xl"></div>
                
                <div className="relative p-8 md:p-10">
                  <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                      {post.frontmatter.title}
                    </span>
                  </motion.h1>

                  {/* Enhanced Tags with staggered animation */}
                  <motion.div
                    className="flex flex-wrap gap-3 mb-6"
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.05 } },
                    }}
                  >
                    {post.frontmatter.tags.map((tag: string) => (
                      <motion.div
                        key={tag}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8, y: 10 },
                          visible: {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            transition: { duration: 0.3 },
                          },
                        }}
                        whileHover={{ y: -2, scale: 1.05, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant="outline"
                          className="bg-background/60 backdrop-blur-sm border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 px-4 py-2 text-sm font-medium shadow-sm"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary/60 mr-2"></span>
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Enhanced Meta information with icons */}
                  <motion.div
                    className="flex flex-wrap items-center gap-8 text-muted-foreground"
                    variants={fadeInUp}
                  >
                    <motion.div 
                      className="flex items-center gap-3 px-4 py-2 bg-background/40 rounded-full backdrop-blur-sm border border-border/20"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--background), 0.6)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <Calendar className="h-4 w-4 text-primary/80" />
                      <span className="font-medium">{formatDate(post.frontmatter.date)}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3 px-4 py-2 bg-background/40 rounded-full backdrop-blur-sm border border-border/20"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--background), 0.6)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <User className="h-4 w-4 text-primary/80" />
                      <span className="font-medium">{post.frontmatter.author}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3 px-4 py-2 bg-background/40 rounded-full backdrop-blur-sm border border-border/20"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--background), 0.6)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <Clock className="h-4 w-4 text-primary/80" />
                      <span className="font-medium">{readingTime}</span>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {post.frontmatter.image && (
              <motion.div
                className="mb-12"
                variants={fadeInUp}
                whileInView={{ scale: 1, opacity: 1 }}
                initial={{ scale: 0.95, opacity: 0.8 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/20">
                  {/* Enhanced image backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-20"></div>
                  
                  <Image
                    src={post.frontmatter.image}
                    alt={post.frontmatter.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto relative z-10 transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Enhanced overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-30"></div>
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-40"></div>
                </div>
                
                {/* Image caption area */}
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground italic">
                    Featured image for &ldquo;{post.frontmatter.title}&rdquo;
                  </p>
                </div>
              </motion.div>
            )}

            {/* Enhanced Table of Contents (mobile only) */}
            <motion.div
              variants={fadeInUp}
              className="lg:hidden mb-8"
              ref={tocRef}
            >
              <div className="relative">
                {/* Enhanced backdrop with blur effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background/80 to-background/95 backdrop-blur-xl rounded-2xl border border-border/30 shadow-xl"></div>
                
                <div className="relative p-6">
                  <Button
                    variant="outline"
                    className="w-full flex justify-between items-center bg-background/80 backdrop-blur-sm border-border/40 hover:bg-background/90 transition-all duration-300 shadow-sm"
                    onClick={() => setShowToc(!showToc)}
                  >
                    <span className="flex items-center gap-3">
                      <div className="p-1.5 rounded-lg bg-primary/10">
                        <List className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">Table of Contents</span>
                      <Badge variant="secondary" className="ml-2 px-2 py-0.5 text-xs">
                        {toc.length}
                      </Badge>
                    </span>
                    <motion.div
                      animate={{ rotate: showToc ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </motion.div>
                  </Button>

                  {showToc && toc.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="mt-4 overflow-hidden"
                    >
                      <div className="bg-background/60 backdrop-blur-sm rounded-xl border border-border/20 p-4">
                        <ul className="space-y-1.5 text-sm max-h-80 overflow-y-auto custom-scrollbar">
                          {toc.map(({ text, id, level }, index) => (
                            <motion.li
                              key={id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                              className={`
                                transition-all duration-200 rounded-lg
                                ${
                                  level === 1
                                    ? "font-semibold text-foreground"
                                    : level === 2
                                    ? "ml-0"
                                    : level === 3
                                    ? "ml-3"
                                    : level >= 4
                                    ? "ml-6"
                                    : ""
                                }
                              `}
                            >
                              <button
                                onClick={() => handleTocItemClick(id)}
                                className={`
                                  w-full text-left block px-3 py-2 rounded-lg transition-all duration-200 
                                  hover:bg-primary/10 group relative overflow-hidden
                                  ${
                                    activeId === id
                                      ? "bg-primary/15 text-primary font-medium shadow-sm"
                                      : "text-muted-foreground hover:text-foreground"
                                  }
                                `}
                              >
                                {/* Animated background indicator */}
                                <div className={`
                                  absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 
                                  transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300
                                  ${activeId === id ? 'translate-x-0' : ''}
                                `} />
                                
                                <div className="relative flex items-center gap-2">
                                  <span className={`
                                    flex-shrink-0 transition-colors duration-200
                                    ${activeId === id ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}
                                  `}>
                                    {level === 1 ? '●' : level === 2 ? '○' : '▪'}
                                  </span>
                                  <span className="line-clamp-2">{text}</span>
                                </div>
                              </button>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Enhanced Article content */}
            <motion.article
              className="relative"
              variants={fadeInUp}
            >
              {/* Enhanced backdrop for article content */}
              <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/80 to-background/95 backdrop-blur-sm rounded-3xl border border-border/20 shadow-xl"></div>
              
              <div className="relative p-8 md:p-12">
                <div className="prose prose-lg prose-slate dark:prose-invert max-w-none 
                  prose-headings:font-bold prose-headings:tracking-tight
                  prose-h1:text-3xl prose-h1:mb-8 prose-h1:text-foreground
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-foreground
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-foreground
                  prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-foreground
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm
                  prose-pre:bg-slate-900 prose-pre:border prose-pre:border-border/20 prose-pre:rounded-xl
                  prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-xl
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:transition-colors
                  prose-ul:my-6 prose-ol:my-6 prose-li:my-2
                  prose-img:rounded-xl prose-img:shadow-lg prose-img:border prose-img:border-border/20
                ">
                  <MdxRemoteRender
                    mdxSource={post.serializedContent}
                    mdxScope={{}}
                  />
                </div>
              </div>
            </motion.article>

            {/* Share and comment section */}
            <motion.div
              className="mt-12 pt-8 border-t border-border/40"
              variants={fadeInUp}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Share this article</h3>
                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full"
                    aria-label="Share on LinkedIn"
                    onClick={() =>
                      window.open(
                        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                          window.location.href
                        )}`,
                        "_blank"
                      )
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
                    </svg>
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full"
                    aria-label="Share on Facebook"
                    onClick={() =>
                      window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          window.location.href
                        )}`,
                        "_blank"
                      )
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full"
                    aria-label="Share on WhatsApp"
                    onClick={() =>
                      window.open(
                        `https://wa.me/?text=${encodeURIComponent(
                          document.title
                        )} \n ${encodeURIComponent(window.location.href)}`,
                        "_blank"
                      )
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full"
                    aria-label="Copy link"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      toast.success("Link copied");
                      setCopied(true);
                    }}
                  >
                    {copied ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <Share2 className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced TOC Sidebar (desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden lg:block lg:col-span-1"
          >
            <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-hidden">
              <div className="relative h-full">
                {/* Enhanced backdrop with multiple layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background/90 to-background/95 backdrop-blur-xl rounded-2xl border border-border/30 shadow-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/10 rounded-2xl"></div>
                
                <div className="relative p-6 h-full flex flex-col">
                  {/* Header with enhanced styling */}
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-primary/10">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      Contents
                    </h2>
                    <Badge variant="secondary" className="px-3 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm">
                      {toc.length} sections
                    </Badge>
                  </div>

                  {toc.length > 0 ? (
                    <nav className="flex-1 overflow-hidden">
                      <div className="h-full overflow-y-auto custom-scrollbar pr-2">
                        <ul className="space-y-1.5 text-sm">
                          {toc.map(({ text, id, level }, index) => (
                            <motion.li
                              key={id}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.03 }}
                              className={`
                                transition-all duration-200 rounded-xl overflow-hidden
                                ${
                                  level === 1
                                    ? "font-bold text-foreground"
                                    : level === 2
                                    ? "ml-0"
                                    : level === 3
                                    ? "ml-2"
                                    : level >= 4
                                    ? "ml-4"
                                    : ""
                                }
                              `}
                            >
                              <button
                                onClick={() => handleTocItemClick(id)}
                                className={`
                                  w-full text-left block px-4 py-3 rounded-xl transition-all duration-300 
                                  hover:bg-primary/10 group relative overflow-hidden
                                  ${
                                    activeId === id
                                      ? "bg-primary/20 text-primary font-semibold shadow-sm border border-primary/20"
                                      : "text-muted-foreground hover:text-foreground"
                                  }
                                `}
                              >
                                {/* Enhanced active indicator */}
                                {activeId === id && (
                                  <motion.div
                                    layoutId="activeSection"
                                    className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-xl"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                  />
                                )}
                                
                                {/* Hover animation */}
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/8 to-primary/0 rounded-xl"
                                  initial={{ x: "-100%" }}
                                  whileHover={{ x: "100%" }}
                                  transition={{ duration: 0.6, ease: "easeInOut" }}
                                />
                                
                                <div className="relative flex items-start gap-3">
                                  <div className={`
                                    flex-shrink-0 mt-1 transition-colors duration-200
                                    ${activeId === id ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}
                                  `}>
                                    {level === 1 ? (
                                      <div className="w-2 h-2 rounded-full bg-current" />
                                    ) : level === 2 ? (
                                      <div className="w-1.5 h-1.5 rounded-full bg-current" />
                                    ) : (
                                      <div className="w-1 h-1 rounded-full bg-current" />
                                    )}
                                  </div>
                                  <span className="line-clamp-3 leading-relaxed">{text}</span>
                                </div>
                              </button>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </nav>
                  ) : (
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center mx-auto mb-3">
                          <List className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground text-sm">
                          No headings found in this article.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
