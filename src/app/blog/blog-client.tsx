"use client";

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Filter,
  LayoutGrid,
  List as ListIcon,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { PostCard } from "@/components/blog/post-card";
import { HudPanel } from "@/components/game/hud-panel";
import type { Post } from "@/lib/mdx";

type SortOption = "newest" | "oldest" | "az" | "za";
type ViewMode = "grid" | "list";

export default function BlogClient({ posts: initialPosts }: { posts: Post[] }) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>("newest");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const allTags = useMemo(
    () =>
      Array.from(
        new Set(initialPosts.flatMap((post) => post.frontmatter.tags || [])),
      ).sort(),
    [initialPosts],
  );

  useEffect(() => {
    let filtered = [...initialPosts];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.frontmatter.title.toLowerCase().includes(query) ||
          post.frontmatter.description?.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query),
      );
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter((post) =>
        selectedTags.every(
          (tag) => post.frontmatter.tags && post.frontmatter.tags.includes(tag),
        ),
      );
    }

    filtered.sort((a, b) => {
      if (sortOption === "newest") {
        return (
          new Date(b.frontmatter.date).getTime() -
          new Date(a.frontmatter.date).getTime()
        );
      }
      if (sortOption === "oldest") {
        return (
          new Date(a.frontmatter.date).getTime() -
          new Date(b.frontmatter.date).getTime()
        );
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

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
    setSortOption("newest");
  };

  return (
    <div className="mx-auto max-w-6xl py-6">
      <HudPanel className="p-6 sm:p-7" glow={false}>
        <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/10 px-3 py-1.5 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>BLOG TERMINAL</span>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-indigo-300 to-violet-300 md:text-4xl">
          My Blog
        </h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Thoughts, insights, and guides on web development, design, and modern
          technologies.
        </p>

        <div className="mt-6 grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-11 rounded-2xl border-border/50 bg-background/10 pl-9 pr-10 text-foreground placeholder:text-muted-foreground/70 backdrop-blur focus-visible:ring-primary/25"
            />
            {searchQuery ? (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Clear search"
                type="button"
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center gap-2 lg:justify-end">
            <Button
              variant="outline"
              size="sm"
              className="h-10 rounded-full border-border/50 bg-background/10 backdrop-blur hover:bg-background/20"
              onClick={() => setIsFiltersOpen((v) => !v)}
              aria-expanded={isFiltersOpen}
            >
              <Filter className="mr-2 h-4 w-4" /> Filters
              {selectedTags.length ? (
                <span className="ml-2 rounded-full bg-primary/20 px-2 py-0.5 text-[11px] text-primary-foreground">
                  {selectedTags.length}
                </span>
              ) : null}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-10 rounded-full border-border/50 bg-background/10 backdrop-blur hover:bg-background/20"
                >
                  <SlidersHorizontal className="mr-2 h-4 w-4" /> Sort
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[170px]">
                <DropdownMenuItem onClick={() => setSortOption("newest")}>
                  Newest first
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortOption("oldest")}>
                  Oldest first
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setSortOption("az")}>
                  A-Z
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortOption("za")}>
                  Z-A
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {(selectedTags.length > 0 || searchQuery) ? (
              <Button
                variant="ghost"
                size="sm"
                className="h-10 rounded-full hover:bg-background/15"
                onClick={clearFilters}
              >
                Clear
              </Button>
            ) : null}

            <div className="ml-auto flex items-center rounded-full border border-border/50 bg-background/10 p-1 backdrop-blur lg:ml-0">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                className="h-9 w-9 rounded-full"
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="icon"
                className="h-9 w-9 rounded-full"
                onClick={() => setViewMode("list")}
                aria-label="List view"
              >
                <ListIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <AnimatePresenceSection open={isFiltersOpen}>
          <div className="mt-5 rounded-2xl border border-border/50 bg-background/10 p-4 backdrop-blur">
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className="cursor-pointer rounded-full px-3 py-1 text-xs"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </AnimatePresenceSection>
      </HudPanel>

      <motion.div
        className="mt-6 text-sm text-muted-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Showing {posts.length} {posts.length === 1 ? "article" : "articles"}
        {selectedTags.length > 0 ? (
          <>
            {" "}
            filtered by{" "}
            <span className="font-medium text-foreground">
              {selectedTags.join(", ")}
            </span>
          </>
        ) : null}
        {searchQuery ? (
          <>
            {" "}
            containing{" "}
            <span className="font-medium text-foreground">
              &quot;{searchQuery}&quot;
            </span>
          </>
        ) : null}
      </motion.div>

      {posts.length === 0 ? (
        <div className="py-12 text-center">
          <h3 className="text-xl mb-2">No articles found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filter criteria
          </p>
          {(selectedTags.length > 0 || searchQuery) ? (
            <Button
              variant="outline"
              onClick={clearFilters}
              className="mt-4 rounded-full border-border/50 bg-background/10 backdrop-blur hover:bg-background/20"
            >
              Clear filters
            </Button>
          ) : null}
        </div>
      ) : (
        <motion.div
          className={
            viewMode === "grid"
              ? "mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              : "mt-6 flex flex-col gap-4"
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

function AnimatePresenceSection({
  open,
  children,
}: {
  open: boolean;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={false}
      animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
}
