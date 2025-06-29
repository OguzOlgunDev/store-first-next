"use client";
import { Input } from "../ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebounce, useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";

function NavSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParams.get("search")?.toString() || ""
  );

  const handleSearch = useDebouncedCallback((search: string) => {
    const params = new URLSearchParams();
    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }
    replace(`products?${params.toString()}`);
  }, 200);

  useEffect(() => {
    if (!searchParams.get("search")) {
      setSearch("");
    }
  }, [searchParams]);
  return (
    <Input
      type="search"
      className="max-w-xs dark:bg-muted bg-muted"
      placeholder="Search..."
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
    />
  );
}

export default NavSearch;
