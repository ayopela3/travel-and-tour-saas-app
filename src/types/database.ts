// This file is a placeholder for Supabase generated types.
// To generate types, run:
// npx supabase gen types typescript --project-id <your-project-id> > src/types/database.ts
//
// Or if using local development:
// npx supabase gen types typescript --local > src/types/database.ts

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: Record<string, never>;
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
