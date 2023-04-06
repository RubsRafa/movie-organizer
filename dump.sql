--
-- PostgreSQL database dump
--

-- Dumped from database version 12.14 (Ubuntu 12.14-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.14 (Ubuntu 12.14-0ubuntu0.20.04.1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: genres; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.genres (
    id integer NOT NULL,
    genre text NOT NULL
);


--
-- Name: genres_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.genres_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: genres_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.genres_id_seq OWNED BY public.genres.id;


--
-- Name: itens; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.itens (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: itens_genres; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.itens_genres (
    id integer NOT NULL,
    id_item integer NOT NULL,
    id_genre integer NOT NULL
);


--
-- Name: itens_genres_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.itens_genres_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: itens_genres_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.itens_genres_id_seq OWNED BY public.itens_genres.id;


--
-- Name: itens_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.itens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: itens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.itens_id_seq OWNED BY public.itens.id;


--
-- Name: itens_platforms; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.itens_platforms (
    id integer NOT NULL,
    id_item integer NOT NULL,
    id_platform integer NOT NULL
);


--
-- Name: itens_platforms_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.itens_platforms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: itens_platforms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.itens_platforms_id_seq OWNED BY public.itens_platforms.id;


--
-- Name: itens_status; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.itens_status (
    id integer NOT NULL,
    id_item integer NOT NULL,
    id_status integer NOT NULL
);


--
-- Name: itens_status_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.itens_status_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: itens_status_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.itens_status_id_seq OWNED BY public.itens_status.id;


--
-- Name: platforms; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.platforms (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: platforms_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.platforms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: platforms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.platforms_id_seq OWNED BY public.platforms.id;


--
-- Name: status; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.status (
    id integer NOT NULL,
    status text NOT NULL
);


--
-- Name: status_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.status_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: status_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.status_id_seq OWNED BY public.status.id;


--
-- Name: genres id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genres ALTER COLUMN id SET DEFAULT nextval('public.genres_id_seq'::regclass);


--
-- Name: itens id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.itens ALTER COLUMN id SET DEFAULT nextval('public.itens_id_seq'::regclass);


--
-- Name: itens_genres id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.itens_genres ALTER COLUMN id SET DEFAULT nextval('public.itens_genres_id_seq'::regclass);


--
-- Name: itens_platforms id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.itens_platforms ALTER COLUMN id SET DEFAULT nextval('public.itens_platforms_id_seq'::regclass);


--
-- Name: itens_status id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.itens_status ALTER COLUMN id SET DEFAULT nextval('public.itens_status_id_seq'::regclass);


--
-- Name: platforms id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.platforms ALTER COLUMN id SET DEFAULT nextval('public.platforms_id_seq'::regclass);


--
-- Name: status id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.status ALTER COLUMN id SET DEFAULT nextval('public.status_id_seq'::regclass);


--
-- Data for Name: genres; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.genres VALUES (1, 'Action');
INSERT INTO public.genres VALUES (2, 'Adventure');
INSERT INTO public.genres VALUES (3, 'Animation');
INSERT INTO public.genres VALUES (4, 'Biography');
INSERT INTO public.genres VALUES (5, 'Comedy');
INSERT INTO public.genres VALUES (6, 'Crime');
INSERT INTO public.genres VALUES (7, 'Documentary');
INSERT INTO public.genres VALUES (8, 'Drama');
INSERT INTO public.genres VALUES (9, 'Family');
INSERT INTO public.genres VALUES (10, 'Fantasy');
INSERT INTO public.genres VALUES (11, 'Film Noir');
INSERT INTO public.genres VALUES (12, 'History');
INSERT INTO public.genres VALUES (13, 'Horror');
INSERT INTO public.genres VALUES (14, 'Music');
INSERT INTO public.genres VALUES (15, 'Musical');
INSERT INTO public.genres VALUES (16, 'Mystery');
INSERT INTO public.genres VALUES (17, 'Romance');
INSERT INTO public.genres VALUES (18, 'Sci-Fi');
INSERT INTO public.genres VALUES (19, 'Short');
INSERT INTO public.genres VALUES (20, 'Sport');
INSERT INTO public.genres VALUES (21, 'Superhero');
INSERT INTO public.genres VALUES (22, 'Thriller');
INSERT INTO public.genres VALUES (23, 'War');
INSERT INTO public.genres VALUES (24, 'Western');


--
-- Data for Name: itens; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: itens_genres; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: itens_platforms; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: itens_status; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: platforms; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.platforms VALUES (1, 'Netflix');
INSERT INTO public.platforms VALUES (2, 'Amazon Prime Video');
INSERT INTO public.platforms VALUES (3, 'Hulu');
INSERT INTO public.platforms VALUES (4, 'HBO Max');
INSERT INTO public.platforms VALUES (5, 'Disney+');
INSERT INTO public.platforms VALUES (6, 'Apple TV+');
INSERT INTO public.platforms VALUES (7, 'Google Play');
INSERT INTO public.platforms VALUES (8, 'YouTube');
INSERT INTO public.platforms VALUES (9, 'Vimeo');
INSERT INTO public.platforms VALUES (10, 'Crunchyroll');
INSERT INTO public.platforms VALUES (11, 'Funimation');
INSERT INTO public.platforms VALUES (12, 'Tubi');
INSERT INTO public.platforms VALUES (13, 'Peacock');
INSERT INTO public.platforms VALUES (14, 'Paramount+');
INSERT INTO public.platforms VALUES (15, 'FandangoNOW');
INSERT INTO public.platforms VALUES (16, 'Showtime');
INSERT INTO public.platforms VALUES (17, 'Starz');
INSERT INTO public.platforms VALUES (18, 'Cinemax');
INSERT INTO public.platforms VALUES (19, 'Redbox');


--
-- Data for Name: status; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.status VALUES (1, 'Watched');
INSERT INTO public.status VALUES (2, 'Watching');
INSERT INTO public.status VALUES (3, 'Want to watch');


--
-- Name: genres_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.genres_id_seq', 24, true);


--
-- Name: itens_genres_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.itens_genres_id_seq', 4, true);


--
-- Name: itens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.itens_id_seq', 6, true);


--
-- Name: itens_platforms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.itens_platforms_id_seq', 4, true);


--
-- Name: itens_status_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.itens_status_id_seq', 4, true);


--
-- Name: platforms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.platforms_id_seq', 19, true);


--
-- Name: status_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.status_id_seq', 3, true);


--
-- Name: genres genres_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genres
    ADD CONSTRAINT genres_pkey PRIMARY KEY (id);


--
-- Name: itens_genres itens_genres_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.itens_genres
    ADD CONSTRAINT itens_genres_pkey PRIMARY KEY (id);


--
-- Name: itens itens_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.itens
    ADD CONSTRAINT itens_pkey PRIMARY KEY (id);


--
-- Name: itens_platforms itens_platforms_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.itens_platforms
    ADD CONSTRAINT itens_platforms_pkey PRIMARY KEY (id);


--
-- Name: itens_status itens_status_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.itens_status
    ADD CONSTRAINT itens_status_pkey PRIMARY KEY (id);


--
-- Name: platforms platforms_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.platforms
    ADD CONSTRAINT platforms_pkey PRIMARY KEY (id);


--
-- Name: status status_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_pkey PRIMARY KEY (id);


--
-- Name: itens_genres fk_id_genre; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.itens_genres
    ADD CONSTRAINT fk_id_genre FOREIGN KEY (id_genre) REFERENCES public.genres(id) ON DELETE CASCADE;


--
-- Name: itens_status fk_id_genre; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.itens_status
    ADD CONSTRAINT fk_id_genre FOREIGN KEY (id_status) REFERENCES public.status(id) ON DELETE CASCADE;


--
-- Name: itens_platforms fk_id_item; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.itens_platforms
    ADD CONSTRAINT fk_id_item FOREIGN KEY (id_item) REFERENCES public.itens(id) ON DELETE CASCADE;


--
-- Name: itens_genres fk_id_item; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.itens_genres
    ADD CONSTRAINT fk_id_item FOREIGN KEY (id_item) REFERENCES public.itens(id) ON DELETE CASCADE;


--
-- Name: itens_status fk_id_item; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.itens_status
    ADD CONSTRAINT fk_id_item FOREIGN KEY (id_item) REFERENCES public.itens(id) ON DELETE CASCADE;


--
-- Name: itens_platforms fk_id_platform; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.itens_platforms
    ADD CONSTRAINT fk_id_platform FOREIGN KEY (id_platform) REFERENCES public.platforms(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

