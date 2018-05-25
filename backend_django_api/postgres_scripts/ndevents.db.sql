--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.13
-- Dumped by pg_dump version 9.5.13

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: NDEvents_api_booking; Type: TABLE; Schema: public; Owner: wano
--

CREATE TABLE public."NDEvents_api_booking" (
    booking_id bigint NOT NULL,
    first_name character varying(100) NOT NULL,
    last_name character varying(100) NOT NULL,
    email character varying(254) NOT NULL,
    quantity integer NOT NULL,
    promotional_code character varying(30),
    date_created timestamp with time zone NOT NULL,
    event_id_id bigint
);


ALTER TABLE public."NDEvents_api_booking" OWNER TO wano;

--
-- Name: NDEvents_api_booking_booking_id_seq; Type: SEQUENCE; Schema: public; Owner: wano
--

CREATE SEQUENCE public."NDEvents_api_booking_booking_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."NDEvents_api_booking_booking_id_seq" OWNER TO wano;

--
-- Name: NDEvents_api_booking_booking_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wano
--

ALTER SEQUENCE public."NDEvents_api_booking_booking_id_seq" OWNED BY public."NDEvents_api_booking".booking_id;


--
-- Name: NDEvents_api_event; Type: TABLE; Schema: public; Owner: wano
--

CREATE TABLE public."NDEvents_api_event" (
    event_id bigint NOT NULL,
    title character varying(30) NOT NULL,
    description text NOT NULL,
    venue text NOT NULL,
    capacity_max integer NOT NULL,
    capacity_expected integer NOT NULL,
    bookings_available integer,
    bookings_made integer,
    promotional_code character varying(30),
    price numeric(100,2),
    date_start timestamp with time zone NOT NULL,
    date_end timestamp with time zone NOT NULL,
    date_created timestamp with time zone NOT NULL,
    last_updated timestamp with time zone NOT NULL,
    launch_date timestamp with time zone,
    is_launched boolean NOT NULL,
    organisers_name_id integer NOT NULL
);


ALTER TABLE public."NDEvents_api_event" OWNER TO wano;

--
-- Name: NDEvents_api_event_event_id_seq; Type: SEQUENCE; Schema: public; Owner: wano
--

CREATE SEQUENCE public."NDEvents_api_event_event_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."NDEvents_api_event_event_id_seq" OWNER TO wano;

--
-- Name: NDEvents_api_event_event_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wano
--

ALTER SEQUENCE public."NDEvents_api_event_event_id_seq" OWNED BY public."NDEvents_api_event".event_id;


--
-- Name: auth_group; Type: TABLE; Schema: public; Owner: wano
--

CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(80) NOT NULL
);


ALTER TABLE public.auth_group OWNER TO wano;

--
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: wano
--

CREATE SEQUENCE public.auth_group_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_id_seq OWNER TO wano;

--
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wano
--

ALTER SEQUENCE public.auth_group_id_seq OWNED BY public.auth_group.id;


--
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: wano
--

CREATE TABLE public.auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_group_permissions OWNER TO wano;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: wano
--

CREATE SEQUENCE public.auth_group_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_permissions_id_seq OWNER TO wano;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wano
--

ALTER SEQUENCE public.auth_group_permissions_id_seq OWNED BY public.auth_group_permissions.id;


--
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: wano
--

CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE public.auth_permission OWNER TO wano;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: wano
--

CREATE SEQUENCE public.auth_permission_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_permission_id_seq OWNER TO wano;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wano
--

ALTER SEQUENCE public.auth_permission_id_seq OWNED BY public.auth_permission.id;


--
-- Name: auth_user; Type: TABLE; Schema: public; Owner: wano
--

CREATE TABLE public.auth_user (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    username character varying(150) NOT NULL,
    first_name character varying(30) NOT NULL,
    last_name character varying(150) NOT NULL,
    email character varying(254) NOT NULL,
    is_staff boolean NOT NULL,
    is_active boolean NOT NULL,
    date_joined timestamp with time zone NOT NULL
);


ALTER TABLE public.auth_user OWNER TO wano;

--
-- Name: auth_user_groups; Type: TABLE; Schema: public; Owner: wano
--

CREATE TABLE public.auth_user_groups (
    id integer NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE public.auth_user_groups OWNER TO wano;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: wano
--

CREATE SEQUENCE public.auth_user_groups_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_groups_id_seq OWNER TO wano;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wano
--

ALTER SEQUENCE public.auth_user_groups_id_seq OWNED BY public.auth_user_groups.id;


--
-- Name: auth_user_id_seq; Type: SEQUENCE; Schema: public; Owner: wano
--

CREATE SEQUENCE public.auth_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_id_seq OWNER TO wano;

--
-- Name: auth_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wano
--

ALTER SEQUENCE public.auth_user_id_seq OWNED BY public.auth_user.id;


--
-- Name: auth_user_user_permissions; Type: TABLE; Schema: public; Owner: wano
--

CREATE TABLE public.auth_user_user_permissions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_user_user_permissions OWNER TO wano;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: wano
--

CREATE SEQUENCE public.auth_user_user_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_user_permissions_id_seq OWNER TO wano;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wano
--

ALTER SEQUENCE public.auth_user_user_permissions_id_seq OWNED BY public.auth_user_user_permissions.id;


--
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: wano
--

CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE public.django_admin_log OWNER TO wano;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: wano
--

CREATE SEQUENCE public.django_admin_log_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_admin_log_id_seq OWNER TO wano;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wano
--

ALTER SEQUENCE public.django_admin_log_id_seq OWNED BY public.django_admin_log.id;


--
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: wano
--

CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE public.django_content_type OWNER TO wano;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: wano
--

CREATE SEQUENCE public.django_content_type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_content_type_id_seq OWNER TO wano;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wano
--

ALTER SEQUENCE public.django_content_type_id_seq OWNED BY public.django_content_type.id;


--
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: wano
--

CREATE TABLE public.django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE public.django_migrations OWNER TO wano;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: wano
--

CREATE SEQUENCE public.django_migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_migrations_id_seq OWNER TO wano;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wano
--

ALTER SEQUENCE public.django_migrations_id_seq OWNED BY public.django_migrations.id;


--
-- Name: django_session; Type: TABLE; Schema: public; Owner: wano
--

CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE public.django_session OWNER TO wano;

--
-- Name: booking_id; Type: DEFAULT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public."NDEvents_api_booking" ALTER COLUMN booking_id SET DEFAULT nextval('public."NDEvents_api_booking_booking_id_seq"'::regclass);


--
-- Name: event_id; Type: DEFAULT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public."NDEvents_api_event" ALTER COLUMN event_id SET DEFAULT nextval('public."NDEvents_api_event_event_id_seq"'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.auth_group ALTER COLUMN id SET DEFAULT nextval('public.auth_group_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_group_permissions_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.auth_permission ALTER COLUMN id SET DEFAULT nextval('public.auth_permission_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.auth_user ALTER COLUMN id SET DEFAULT nextval('public.auth_user_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.auth_user_groups ALTER COLUMN id SET DEFAULT nextval('public.auth_user_groups_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.auth_user_user_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_user_user_permissions_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.django_admin_log ALTER COLUMN id SET DEFAULT nextval('public.django_admin_log_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.django_content_type ALTER COLUMN id SET DEFAULT nextval('public.django_content_type_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.django_migrations ALTER COLUMN id SET DEFAULT nextval('public.django_migrations_id_seq'::regclass);


--
-- Data for Name: NDEvents_api_booking; Type: TABLE DATA; Schema: public; Owner: wano
--

COPY public."NDEvents_api_booking" (booking_id, first_name, last_name, email, quantity, promotional_code, date_created, event_id_id) FROM stdin;
\.


--
-- Name: NDEvents_api_booking_booking_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wano
--

SELECT pg_catalog.setval('public."NDEvents_api_booking_booking_id_seq"', 1, false);


--
-- Data for Name: NDEvents_api_event; Type: TABLE DATA; Schema: public; Owner: wano
--

COPY public."NDEvents_api_event" (event_id, title, description, venue, capacity_max, capacity_expected, bookings_available, bookings_made, promotional_code, price, date_start, date_end, date_created, last_updated, launch_date, is_launched, organisers_name_id) FROM stdin;
1	Solo: A Star Wars Story	During an adventure into a dark criminal underworld, Han Solo meets his future copilot Chewbacca and encounters Lando Calrissian years before joining the Rebellion.	Hoyts Wetherill Park	10000	10000	10000	0	DISNEY	35.00	2018-05-27 18:00:00.706+00	2018-05-27 21:00:00.008+00	2018-05-25 21:53:07.951+00	2018-05-25 21:53:12.193+00	2018-05-24 00:00:01.271+00	t	1
2	Deadpool 2	After surviving a near fatal bovine attack, a disfigured cafeteria chef (Wade Wilson) struggles to fulfill his dream of becoming Mayberry’s hottest bartender while also learning to cope with his lost sense of taste. Searching to regain his spice for life, as well as a flux capacitor, Wade must battle ninjas, the yakuza, and a pack of sexually aggressive canines, as he journeys around the world to discover the importance of family, friendship, and flavor – finding a new taste for adventure and earning the coveted coffee mug title of World’s Best Lover.	HOYTS Blacktown	100	75	100	0	\N	22.00	2018-05-26 18:00:00+00	2018-05-26 21:00:00+00	2018-05-25 12:19:00.734653+00	2018-05-25 12:19:00.734669+00	\N	f	1
3	Avengers: Infinity War	The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.	HOYTS Chatswood Mandarin	50	30	50	0	\N	25.50	2018-05-30 19:00:00+00	2018-05-30 21:50:00+00	2018-05-25 12:21:46.024893+00	2018-05-25 12:22:07.431213+00	\N	f	1
4	Ant-man and The Wasp	From the Marvel Cinematic Universe comes "Ant-Man and the Wasp," a new chapter featuring heroes with the astonishing ability to shrink. In the aftermath of "Captain America: Civil War," Scott Lang grapples with the consequences of his choices as both a Super Hero and a father. As he struggles to rebalance his home life with his responsibilities as Ant-Man, he's confronted by Hope van Dyne and Dr. Hank Pym with an urgent new mission. Scott must once again put on the suit and learn to fight alongside the Wasp as the team works together to uncover secrets from the past.	HOYTS Entertainment Quarter	100	90	100	0	\N	22.50	2018-07-05 20:00:00+00	2018-07-05 22:48:00+00	2018-05-25 12:25:43.994114+00	2018-05-25 12:25:43.994127+00	\N	f	1
5	Jurassic World: Fallen Kingdom	It’s been four years since theme park and luxury resort Jurassic World was destroyed by dinosaurs out of containment.  Isla Nublar now sits abandoned by humans while the surviving dinosaurs fend for themselves in the jungles.\r\n\r\nWhen the island’s dormant volcano begins roaring to life, Owen (Chris Pratt) and Claire (Bryce Dallas Howard) mount a campaign to rescue the remaining dinosaurs from this extinction-level event.  Owen is driven to find Blue, his lead raptor who’s still missing in the wild, and Claire has grown a respect for these creatures she now makes her mission.  Arriving on the unstable island as lava begins raining down, their expedition uncovers a conspiracy that could return our entire planet to a perilous order not seen since prehistoric times	Hoyts Chatswood Westfield	80	60	80	0	\N	\N	2018-06-13 18:00:00+00	2018-06-13 21:00:00+00	2018-05-25 12:34:55.651601+00	2018-05-25 12:34:55.651664+00	\N	f	1
6	Aquaman	Arthur Curry learns that he is the heir to the underwater kingdom of Atlantis, and must step forward to lead his people and to be a hero to the world.	Events Moonlight Cinema Sydney	150	100	150	0	\N	15.75	2018-12-13 19:15:00+00	2018-12-13 21:50:00+00	2018-05-25 12:43:42.666891+00	2018-05-25 12:43:42.666908+00	\N	f	1
\.


--
-- Name: NDEvents_api_event_event_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wano
--

SELECT pg_catalog.setval('public."NDEvents_api_event_event_id_seq"', 6, true);


--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: wano
--

COPY public.auth_group (id, name) FROM stdin;
\.


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wano
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: wano
--

COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wano
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: wano
--

COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add log entry	1	add_logentry
2	Can change log entry	1	change_logentry
3	Can delete log entry	1	delete_logentry
4	Can add permission	2	add_permission
5	Can change permission	2	change_permission
6	Can delete permission	2	delete_permission
7	Can add group	3	add_group
8	Can change group	3	change_group
9	Can delete group	3	delete_group
10	Can add user	4	add_user
11	Can change user	4	change_user
12	Can delete user	4	delete_user
13	Can add content type	5	add_contenttype
14	Can change content type	5	change_contenttype
15	Can delete content type	5	delete_contenttype
16	Can add session	6	add_session
17	Can change session	6	change_session
18	Can delete session	6	delete_session
19	Can add booking	7	add_booking
20	Can change booking	7	change_booking
21	Can delete booking	7	delete_booking
22	Can add event	8	add_event
23	Can change event	8	change_event
24	Can delete event	8	delete_event
\.


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wano
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 24, true);


--
-- Data for Name: auth_user; Type: TABLE DATA; Schema: public; Owner: wano
--

COPY public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) FROM stdin;
1	pbkdf2_sha256$100000$eoIqc1xp6odB$A7gOrO1cPAbS+TJbukUFYyZ+oRNihYeUGzDW338M5+Y=	2018-05-25 11:43:42.235282+00	t	codeninja			andrew@neuraldev.io	t	t	2018-05-25 11:43:18.640925+00
\.


--
-- Data for Name: auth_user_groups; Type: TABLE DATA; Schema: public; Owner: wano
--

COPY public.auth_user_groups (id, user_id, group_id) FROM stdin;
\.


--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wano
--

SELECT pg_catalog.setval('public.auth_user_groups_id_seq', 1, false);


--
-- Name: auth_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wano
--

SELECT pg_catalog.setval('public.auth_user_id_seq', 1, true);


--
-- Data for Name: auth_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: wano
--

COPY public.auth_user_user_permissions (id, user_id, permission_id) FROM stdin;
\.


--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wano
--

SELECT pg_catalog.setval('public.auth_user_user_permissions_id_seq', 1, false);


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: wano
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
1	2018-05-25 12:19:00.736613+00	2	Deadpool 2 @ HOYTS Blacktown (2018-05-26 18:00:00+00:00)	1	[{"added": {}}]	8	1
2	2018-05-25 12:21:46.027503+00	3	Avengers: Infinity War @ HOYTS Chatswood Mandarin (2018-05-30 19:00:00+00:00)	1	[{"added": {}}]	8	1
3	2018-05-25 12:22:07.432492+00	3	Avengers: Infinity War @ HOYTS Chatswood Mandarin (2018-05-30 19:00:00+00:00)	2	[]	8	1
4	2018-05-25 12:25:43.995292+00	4	Ant-man and The Wasp @ HOYTS Entertainment Quarter (2018-07-05 20:00:00+00:00)	1	[{"added": {}}]	8	1
5	2018-05-25 12:34:55.653919+00	5	Jurassic World: Fallen Kingdom @ Hoyts Chatswood Westfield (2018-06-13 18:00:00+00:00)	1	[{"added": {}}]	8	1
6	2018-05-25 12:43:42.668223+00	6	Aquaman @ Events Moonlight Cinema Sydney (2018-12-13 19:15:00+00:00)	1	[{"added": {}}]	8	1
\.


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wano
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 6, true);


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: wano
--

COPY public.django_content_type (id, app_label, model) FROM stdin;
1	admin	logentry
2	auth	permission
3	auth	group
4	auth	user
5	contenttypes	contenttype
6	sessions	session
7	NDEvents_api	booking
8	NDEvents_api	event
\.


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wano
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 8, true);


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: wano
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2018-05-25 11:41:51.339062+00
2	auth	0001_initial	2018-05-25 11:41:51.53438+00
3	NDEvents_api	0001_initial	2018-05-25 11:41:51.630559+00
4	admin	0001_initial	2018-05-25 11:41:51.690722+00
5	admin	0002_logentry_remove_auto_add	2018-05-25 11:41:51.70095+00
6	contenttypes	0002_remove_content_type_name	2018-05-25 11:41:51.723505+00
7	auth	0002_alter_permission_name_max_length	2018-05-25 11:41:51.744383+00
8	auth	0003_alter_user_email_max_length	2018-05-25 11:41:51.763651+00
9	auth	0004_alter_user_username_opts	2018-05-25 11:41:51.777207+00
10	auth	0005_alter_user_last_login_null	2018-05-25 11:41:51.794921+00
11	auth	0006_require_contenttypes_0002	2018-05-25 11:41:51.798289+00
12	auth	0007_alter_validators_add_error_messages	2018-05-25 11:41:51.822218+00
13	auth	0008_alter_user_username_max_length	2018-05-25 11:41:51.859005+00
14	auth	0009_alter_user_last_name_max_length	2018-05-25 11:41:51.895373+00
15	sessions	0001_initial	2018-05-25 11:41:51.92898+00
\.


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wano
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 15, true);


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: wano
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
6velogfsk84f3s1rft44wbjkgdudq3bt	MjAwZjJlNWE4MmNmNjFiYTkyNjE3YTE2ZWY5MGQwM2IxYmUyOGExZDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI3ZWQwOWRmOWFlNjU4ZGY3YjMyZGE2NjE3NzJiOGQ0ZjllN2IzMzFlIn0=	2018-06-08 11:43:42.240024+00
\.


--
-- Name: NDEvents_api_booking_pkey; Type: CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public."NDEvents_api_booking"
    ADD CONSTRAINT "NDEvents_api_booking_pkey" PRIMARY KEY (booking_id);


--
-- Name: NDEvents_api_event_pkey; Type: CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public."NDEvents_api_event"
    ADD CONSTRAINT "NDEvents_api_event_pkey" PRIMARY KEY (event_id);


--
-- Name: auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- Name: auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- Name: auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- Name: auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- Name: auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups_user_id_group_id_94350c0c_uniq; Type: CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_group_id_94350c0c_uniq UNIQUE (user_id, group_id);


--
-- Name: auth_user_pkey; Type: CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions_user_id_permission_id_14a6b632_uniq; Type: CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_permission_id_14a6b632_uniq UNIQUE (user_id, permission_id);


--
-- Name: auth_user_username_key; Type: CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_username_key UNIQUE (username);


--
-- Name: django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- Name: django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- Name: django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- Name: django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- Name: django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- Name: NDEvents_api_booking_event_id_id_4a988342; Type: INDEX; Schema: public; Owner: wano
--

CREATE INDEX "NDEvents_api_booking_event_id_id_4a988342" ON public."NDEvents_api_booking" USING btree (event_id_id);


--
-- Name: NDEvents_api_event_organisers_name_id_778fbe45; Type: INDEX; Schema: public; Owner: wano
--

CREATE INDEX "NDEvents_api_event_organisers_name_id_778fbe45" ON public."NDEvents_api_event" USING btree (organisers_name_id);


--
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: wano
--

CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);


--
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: wano
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);


--
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: wano
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);


--
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: wano
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);


--
-- Name: auth_user_groups_group_id_97559544; Type: INDEX; Schema: public; Owner: wano
--

CREATE INDEX auth_user_groups_group_id_97559544 ON public.auth_user_groups USING btree (group_id);


--
-- Name: auth_user_groups_user_id_6a12ed8b; Type: INDEX; Schema: public; Owner: wano
--

CREATE INDEX auth_user_groups_user_id_6a12ed8b ON public.auth_user_groups USING btree (user_id);


--
-- Name: auth_user_user_permissions_permission_id_1fbb5f2c; Type: INDEX; Schema: public; Owner: wano
--

CREATE INDEX auth_user_user_permissions_permission_id_1fbb5f2c ON public.auth_user_user_permissions USING btree (permission_id);


--
-- Name: auth_user_user_permissions_user_id_a95ead1b; Type: INDEX; Schema: public; Owner: wano
--

CREATE INDEX auth_user_user_permissions_user_id_a95ead1b ON public.auth_user_user_permissions USING btree (user_id);


--
-- Name: auth_user_username_6821ab7c_like; Type: INDEX; Schema: public; Owner: wano
--

CREATE INDEX auth_user_username_6821ab7c_like ON public.auth_user USING btree (username varchar_pattern_ops);


--
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: wano
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);


--
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: wano
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);


--
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: wano
--

CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);


--
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: wano
--

CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);


--
-- Name: NDEvents_api_booking_event_id_id_4a988342_fk_NDEvents_; Type: FK CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public."NDEvents_api_booking"
    ADD CONSTRAINT "NDEvents_api_booking_event_id_id_4a988342_fk_NDEvents_" FOREIGN KEY (event_id_id) REFERENCES public."NDEvents_api_event"(event_id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: NDEvents_api_event_organisers_name_id_778fbe45_fk; Type: FK CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public."NDEvents_api_event"
    ADD CONSTRAINT "NDEvents_api_event_organisers_name_id_778fbe45_fk" FOREIGN KEY (organisers_name_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups_group_id_97559544_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_group_id_97559544_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups_user_id_6a12ed8b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_6a12ed8b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log_user_id_c564eba6_fk; Type: FK CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

