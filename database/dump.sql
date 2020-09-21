--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS ONLY public."user" DROP CONSTRAINT IF EXISTS user_pkey;
ALTER TABLE IF EXISTS ONLY public.routine DROP CONSTRAINT IF EXISTS routine_pkey;
ALTER TABLE IF EXISTS ONLY public.exercise DROP CONSTRAINT IF EXISTS exercise_pkey;
ALTER TABLE IF EXISTS ONLY public.day DROP CONSTRAINT IF EXISTS day_pkey;
ALTER TABLE IF EXISTS ONLY public."bodyPart" DROP CONSTRAINT IF EXISTS "bodyPart_pkey";
ALTER TABLE IF EXISTS public."user" ALTER COLUMN "userId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.routine ALTER COLUMN "routineId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.exercise ALTER COLUMN "exerciseId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.day ALTER COLUMN "dayId" DROP DEFAULT;
ALTER TABLE IF EXISTS public."bodyPart" ALTER COLUMN "bodyPartId" DROP DEFAULT;
DROP SEQUENCE IF EXISTS public."user_userId_seq";
DROP TABLE IF EXISTS public."user";
DROP SEQUENCE IF EXISTS public."routine_routineId_seq";
DROP TABLE IF EXISTS public.routine;
DROP SEQUENCE IF EXISTS public."exercise_exerciseId_seq";
DROP TABLE IF EXISTS public."exerciseBodyPart";
DROP TABLE IF EXISTS public.exercise;
DROP SEQUENCE IF EXISTS public."day_dayId_seq";
DROP TABLE IF EXISTS public."dayExercise";
DROP TABLE IF EXISTS public.day;
DROP SEQUENCE IF EXISTS public."bodyPart_bodyPartId_seq";
DROP TABLE IF EXISTS public."bodyPart";
DROP EXTENSION IF EXISTS plpgsql;
DROP SCHEMA IF EXISTS public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: bodyPart; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."bodyPart" (
    "bodyPartId" integer NOT NULL,
    name text NOT NULL
);


--
-- Name: bodyPart_bodyPartId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."bodyPart_bodyPartId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: bodyPart_bodyPartId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."bodyPart_bodyPartId_seq" OWNED BY public."bodyPart"."bodyPartId";


--
-- Name: day; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.day (
    "dayId" integer NOT NULL,
    name text NOT NULL,
    "routineId" integer NOT NULL
);


--
-- Name: dayExercise; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."dayExercise" (
    "dayId" integer NOT NULL,
    "exerciseId" integer NOT NULL
);


--
-- Name: day_dayId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."day_dayId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: day_dayId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."day_dayId_seq" OWNED BY public.day."dayId";


--
-- Name: exercise; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.exercise (
    "exerciseId" integer NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    "default" text DEFAULT 'false'::text
);


--
-- Name: exerciseBodyPart; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."exerciseBodyPart" (
    "bodyPartId" integer NOT NULL,
    "exerciseId" integer NOT NULL
);


--
-- Name: exercise_exerciseId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."exercise_exerciseId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: exercise_exerciseId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."exercise_exerciseId_seq" OWNED BY public.exercise."exerciseId";


--
-- Name: routine; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.routine (
    "routineId" integer NOT NULL,
    "userId" integer NOT NULL,
    "recommendedCalories" integer NOT NULL
);


--
-- Name: routine_routineId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."routine_routineId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: routine_routineId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."routine_routineId_seq" OWNED BY public.routine."routineId";


--
-- Name: user; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."user" (
    "userId" integer NOT NULL,
    "firstName" text NOT NULL,
    "lastName" text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: user_userId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."user_userId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: user_userId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."user_userId_seq" OWNED BY public."user"."userId";


--
-- Name: bodyPart bodyPartId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."bodyPart" ALTER COLUMN "bodyPartId" SET DEFAULT nextval('public."bodyPart_bodyPartId_seq"'::regclass);


--
-- Name: day dayId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.day ALTER COLUMN "dayId" SET DEFAULT nextval('public."day_dayId_seq"'::regclass);


--
-- Name: exercise exerciseId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exercise ALTER COLUMN "exerciseId" SET DEFAULT nextval('public."exercise_exerciseId_seq"'::regclass);


--
-- Name: routine routineId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.routine ALTER COLUMN "routineId" SET DEFAULT nextval('public."routine_routineId_seq"'::regclass);


--
-- Name: user userId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user" ALTER COLUMN "userId" SET DEFAULT nextval('public."user_userId_seq"'::regclass);


--
-- Data for Name: bodyPart; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."bodyPart" ("bodyPartId", name) FROM stdin;
1	Chest
2	Back
3	Shoulders
4	Biceps
5	Legs
6	Abs
7	Triceps
\.


--
-- Data for Name: day; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.day ("dayId", name, "routineId") FROM stdin;
1	Sunday	1
2	Monday	1
3	Tuesday	1
4	Wednesday	1
5	Thursday	1
6	Friday	1
7	Saturday	1
\.


--
-- Data for Name: dayExercise; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."dayExercise" ("dayId", "exerciseId") FROM stdin;
\.


--
-- Data for Name: exercise; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.exercise ("exerciseId", name, description, "default") FROM stdin;
2	test name	test description	false
\.


--
-- Data for Name: exerciseBodyPart; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."exerciseBodyPart" ("bodyPartId", "exerciseId") FROM stdin;
3	3
3	4
3	5
3	6
3	7
\.


--
-- Data for Name: routine; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.routine ("routineId", "userId", "recommendedCalories") FROM stdin;
1	1	0
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."user" ("userId", "firstName", "lastName", email, password, "createdAt") FROM stdin;
1	Michael	Poole	test@gmail.com	testpassword	2020-09-21 17:31:39.268283-05
\.


--
-- Name: bodyPart_bodyPartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."bodyPart_bodyPartId_seq"', 7, true);


--
-- Name: day_dayId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."day_dayId_seq"', 7, true);


--
-- Name: exercise_exerciseId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."exercise_exerciseId_seq"', 2, true);


--
-- Name: routine_routineId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."routine_routineId_seq"', 1, true);


--
-- Name: user_userId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."user_userId_seq"', 1, true);


--
-- Name: bodyPart bodyPart_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."bodyPart"
    ADD CONSTRAINT "bodyPart_pkey" PRIMARY KEY ("bodyPartId");


--
-- Name: day day_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.day
    ADD CONSTRAINT day_pkey PRIMARY KEY ("dayId");


--
-- Name: exercise exercise_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exercise
    ADD CONSTRAINT exercise_pkey PRIMARY KEY ("exerciseId");


--
-- Name: routine routine_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.routine
    ADD CONSTRAINT routine_pkey PRIMARY KEY ("routineId");


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY ("userId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

