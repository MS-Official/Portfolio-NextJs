"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Filter, LayoutGrid, List as ListIcon, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { PostCard } from "@/components/blog/post-card";
import type { Post } from "@/lib/mdx";

type SortOption = "newest" | "oldest" | "az" | "za";
type ViewMode = "grid" | "list";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function BlogClient({ posts: initialPosts }: { posts: Post[] }) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>("newest");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [searchFocused, setSearchFocused] = useState(false);
  
  // Get all unique tags from posts
  const allTags = Array.from(
    new Set(
      initialPosts.flatMap(post => 
        post.frontmatter.tags || []
      )
    )
  ).sort();
  
  // Sort and filter posts based on current filters
  useEffect(() => {
    let filtered = [...initialPosts];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.frontmatter.title.toLowerCase().includes(query) || 
        post.frontmatter.description?.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query)
      );
    }
    
    // Filter by selected tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(post => 
        selectedTags.every(tag => 
          post.frontmatter.tags && post.frontmatter.tags.includes(tag)
        )
      );
    }
    
    // Sort posts
    filtered.sort((a, b) => {
      if (sortOption === "newest") {
        return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
      }
      if (sortOption === "oldest") {
        return new Date(a.frontmatter.date).getTime() - new Date(b.frontmatter.date).getTime();
      }
      if (sortOption === "az") {
        return a.frontmatter.title.localeCompare(b.frontmatter.title);
      }
      if (sortOption === "za") {
        return b.frontmatter.title.localeCompare(a.frontmatter.title);
      }
      return 0;
    });
    
    setPosts(filtered);
  }, [initialPosts, searchQuery, selectedTags, sortOption]);
  
  // Toggle a tag in the filter
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
    setSortOption("newest");
  };
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="text-center mb-16 relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/blogs/blog2.avif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>

        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-1500"></div>
        </div>

        {/* Content container with glassmorphism effect */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
          {/* Glassmorphism background */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl"></div>

          <div className="relative p-8 md:p-12">
        <motion.div variants={fadeInUp}>
          <div className="inline-block p-1.5 px-3 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="h-4 w-4 text-primary inline mr-1" />
            <span className="text-xs font-medium">Tech Blog</span>
          </div>
          <h1 className="md:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            My Blog
          </h1>
          <p className="text-muted-foreground mx-auto mb-8">
            Thoughts, insights, and guides on web development, design, and modern technologies.
            Browse through my articles to learn something new or find solutions to common challenges.
          </p>
        </motion.div>

        {/* Search and filter controls */}
        <motion.div 
          className="flex flex-col gap-4 mx-auto"
          variants={fadeInUp}
        >
          <div className="w-full flex flex-col gap-4">
            {/* Enhanced search input with glassmorphism */}
            <motion.div
              className="relative w-full max-w-md mx-auto"
              animate={searchFocused ? {
                scale: 1.02,
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)"
              } : {}}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl border border-white/20"></div>
              <div className="relative flex items-center">
                <Search className={`absolute left-4 transition-all duration-300 ${searchFocused ? 'text-primary scale-110' : 'text-white/70'} h-5 w-5`} />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-12 bg-transparent border-0 text-white placeholder:text-white/60 focus-visible:ring-0 focus-visible:ring-offset-0 h-12 text-lg"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
                {searchQuery && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 text-white/70 hover:text-white hover:bg-white/20"
                      onClick={() => setSearchQuery('')}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Enhanced control buttons with glassmorphism */}
            <div className="flex flex-wrap gap-3 justify-center items-center">
              {/* Filter controls */}
              <div className="flex flex-wrap items-center gap-2">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                    className={`flex items-center gap-2 transition-all duration-300 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-white/40 ${isFiltersOpen ? 'bg-white/20 border-white/40 shadow-lg' : ''}`}
                  >
                    <Filter className={`h-4 w-4 transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
                    <span className="hidden sm:inline font-medium">Filters</span>
                    {selectedTags.length > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-1 text-xs py-0.5 px-2 rounded-full bg-primary text-primary-foreground font-bold"
                      >
                        {selectedTags.length}
                      </motion.span>
                    )}
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300">
                        <SlidersHorizontal className="h-4 w-4" />
                        <span className="hidden sm:inline font-medium">Sort</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="min-w-[160px] bg-card/95 backdrop-blur-sm border-white/20">
                      <DropdownMenuItem
                        onClick={() => setSortOption("newest")}
                        className={`cursor-pointer ${sortOption === "newest" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                      >
                        Newest first
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setSortOption("oldest")}
                        className={`cursor-pointer ${sortOption === "oldest" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                      >
                        Oldest first
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => setSortOption("az")}
                        className={`cursor-pointer ${sortOption === "az" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                      >
                        A-Z
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setSortOption("za")}
                        className={`cursor-pointer ${sortOption === "za" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                      >
                        Z-A
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </motion.div>

                {selectedTags.length > 0 && (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/20"
                    >
                      Clear all
                    </Button>
                  </motion.div>
                )}
              </div>

              {/* Enhanced view mode buttons */}
              <div className="flex items-center rounded-xl border border-white/20 overflow-hidden bg-white/10 backdrop-blur-sm p-1 shadow-lg">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="icon"
                    className={`h-10 w-10 rounded-lg transition-all duration-300 ${viewMode === "grid" ? 'bg-primary text-primary-foreground shadow-md' : 'text-white/70 hover:text-white hover:bg-white/20'}`}
                    onClick={() => setViewMode("grid")}
                  >
                    <LayoutGrid className="h-5 w-5" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="icon"
                    className={`h-10 w-10 rounded-lg transition-all duration-300 ${viewMode === "list" ? 'bg-primary text-primary-foreground shadow-md' : 'text-white/70 hover:text-white hover:bg-white/20'}`}
                    onClick={() => setViewMode("list")}
                  >
                    <ListIcon className="h-5 w-5" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Enhanced tag filters with glassmorphism */}
          <motion.div
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{
              opacity: isFiltersOpen ? 1 : 0,
              height: isFiltersOpen ? "auto" : 0,
              scale: isFiltersOpen ? 1 : 0.95,
              marginTop: isFiltersOpen ? 12 : 0
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              staggerChildren: 0.05,
              delayChildren: 0.1
            }}
            className="overflow-hidden"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-4 shadow-xl">
              <motion.div
                className="flex flex-wrap gap-3 justify-center"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.03 }
                  }
                }}
              >
                {allTags.map((tag, index) => (
                  <motion.div
                    key={tag}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.8 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                          delay: index * 0.02
                        }
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge
                      variant={selectedTags.includes(tag) ? "default" : "outline"}
                      className={`cursor-pointer transition-all duration-300 px-4 py-2 text-sm font-medium ${
                        selectedTags.includes(tag)
                          ? 'bg-primary text-primary-foreground shadow-lg border-primary/50'
                          : 'bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50 backdrop-blur-sm'
                      }`}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Results summary */}
      <motion.div 
        className="mb-6 text-sm text-muted-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Showing {posts.length} {posts.length === 1 ? 'article' : 'articles'}
        {selectedTags.length > 0 && (
          <> filtered by <span className="font-medium text-foreground">{selectedTags.join(', ')}</span></>
        )}
        {searchQuery && (
          <> containing <span className="font-medium text-foreground">&quot;{searchQuery}&quot;</span></>
        )}
      </motion.div>
      
      {/* Blog posts grid/list */}
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl mb-2">No articles found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          {(selectedTags.length > 0 || searchQuery) && (
            <Button variant="outline" onClick={clearFilters} className="mt-4">
              Clear filters
            </Button>
          )}
        </div>
      ) : (
        <motion.div 
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : "flex flex-col gap-4"
          }
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
        >
          {posts.map((post, index) => (
            <PostCard 
              key={post.slug} 
              post={post} 
              index={index} 
              viewMode={viewMode}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
} 