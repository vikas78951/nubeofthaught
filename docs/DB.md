# DATABASE SPECIFICATION (DB.md)

## DOCUMENT CONTROL

- **System / Project Title:** nubeOfThaughts
- **AI Engine Profile:** CTO Skill Persona v1.0 (Database & Schema Focus)
- **Date Generated:** 2026-10-04
- **Associated Technical Source:** [`/nubeOfThaughts/docs/TDD.md`](file:///home/vikas/Documents/professional/Projects/nubeOfThaughts/docs/TDD.md)

---

## 1. STORAGE ARCHITECTURE & ISOLATION

In accordance with MVP 1 and MVP 2 requirements:
- **Phase 1 & 2 (Client & Serverless Cache):** Frictionless zero-login assessment session storage. Assessments and conversational states are preserved client-side in `sessionStorage` / `localStorage`, with serverless stateless synthesis calls.
- **Phase 3 (PostgreSQL Persistence Schema):** Future-proof schema defined below for multi-user retention, community archetype sharing, and persistent companion history.

---

## 2. DATABASE SCHEMAS (POSTGRESQL SPECIFICATION)

```text
Table: assessment_sessions
id (UUID, Primary Key, Default: gen_random_uuid())
anonymous_session_token (VARCHAR(255), Not Null, Indexed)
user_id (UUID, Nullable) — Linked once user creates persistent account
status (VARCHAR(50), Default: 'in_progress') — 'in_progress', 'completed', 'expired'
started_at (TIMESTAMP WITH TIME ZONE, Default: NOW())
completed_at (TIMESTAMP WITH TIME ZONE, Nullable)
```

```text
Table: stage_responses
id (UUID, Primary Key, Default: gen_random_uuid())
session_id (UUID, Not Null, Foreign Key -> assessment_sessions.id)
stage_index (INT, Not Null) — 1 to 19
illusion_key (VARCHAR(100), Not Null) — e.g. 'bird_or_lynx'
selected_option (VARCHAR(100), Not Null) — e.g. 'Lynx'
response_time_ms (INT, Nullable) — Duration between image render and option click
created_at (TIMESTAMP WITH TIME ZONE, Default: NOW())
```

```text
Table: personality_profiles
id (UUID, Primary Key, Default: gen_random_uuid())
session_id (UUID, Not Null, Unique, Foreign Key -> assessment_sessions.id)
archetype_title (VARCHAR(255), Not Null)
tagline (VARCHAR(500), Not Null)
trait_scores (JSONB, Not Null) — Key-value pairs of dimension scores
core_strengths (JSONB, Not Null) — Array of top strength descriptors
growth_areas (JSONB, Not Null) — Array of blind spots
synthesis_narrative (TEXT, Not Null)
companion_directive (TEXT, Not Null)
raw_gemini_payload (JSONB, Nullable)
created_at (TIMESTAMP WITH TIME ZONE, Default: NOW())
```

```text
Table: companion_chat_messages
id (UUID, Primary Key, Default: gen_random_uuid())
session_id (UUID, Not Null, Foreign Key -> assessment_sessions.id)
sender (VARCHAR(50), Not Null) — 'user' or 'companion'
message_text (TEXT, Not Null)
prompt_tokens (INT, Default: 0)
completion_tokens (INT, Default: 0)
created_at (TIMESTAMP WITH TIME ZONE, Default: NOW())
```
