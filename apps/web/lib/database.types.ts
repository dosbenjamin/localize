export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          created_at: string
          email: string
        }
        Insert: {
          id: string
          created_at?: string
          email: string
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
        }
      }
      profiles_projects: {
        Row: {
          id: string
          created_at: string
          profile_id: string
          project_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          profile_id: string
          project_id: string
        }
        Update: {
          id?: string
          created_at?: string
          profile_id?: string
          project_id?: string
        }
      }
      projects: {
        Row: {
          id: string
          created_at: string
          name: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_project: {
        Args: { name: string; profile_id: string }
        Returns: unknown
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}
