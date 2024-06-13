import { createClient } from "@supabase/supabase-js"
import React, { createContext, useContext, useEffect, useState } from "react"

const SupabaseContext = createContext()

export const SupabaseProvider = ({ children }) => {
  const [supabase, setSupabase] = useState(null)

  // Create a new supabase client
  const supabaseUrl = "https://fyokeylyrwdwdxhanigr.supabase.co"
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5b2tleWx5cndkd2R4aGFuaWdyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNzcyMzU4MiwiZXhwIjoyMDIzMjk5NTgyfQ.-K6JL0wqojyDclMxnSg7dgE2mNNmsYKqhwYRrDLbExA"

  useEffect(() => {
    setSupabase(createClient(supabaseUrl, supabaseKey))
  },[supabaseKey])

  return (
    <SupabaseContext.Provider value={{ supabase }}>
      {children}
    </SupabaseContext.Provider>
  )
}

export const useSupabase = () => useContext(SupabaseContext)