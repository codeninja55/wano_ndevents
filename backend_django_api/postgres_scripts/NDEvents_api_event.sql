--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.13
-- Dumped by pg_dump version 10.4 (Ubuntu 10.4-2.pgdg16.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: NDEvents_api_event; Type: TABLE; Schema: public; Owner: wano
--

-- CREATE TABLE public."NDEvents_api_event" (
--     event_id bigint NOT NULL,
--     title character varying(30) NOT NULL,
--     description text NOT NULL,
--     venue text NOT NULL,
--     capacity_max integer NOT NULL,
--     capacity_expected integer NOT NULL,
--     bookings_available integer,
--     bookings_made integer,
--     promotional_code character varying(30),
--     price numeric(100,2),
--     date_start timestamp with time zone NOT NULL,
--     date_end timestamp with time zone NOT NULL,
--     date_created timestamp with time zone NOT NULL,
--     last_updated timestamp with time zone NOT NULL,
--     launch_date timestamp with time zone,
--     is_launched boolean NOT NULL,
--     organisers_name_id integer NOT NULL
-- );


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
-- Name: NDEvents_api_event event_id; Type: DEFAULT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public."NDEvents_api_event" ALTER COLUMN event_id SET DEFAULT nextval('public."NDEvents_api_event_event_id_seq"'::regclass);


--
-- Data for Name: NDEvents_api_event; Type: TABLE DATA; Schema: public; Owner: wano
--

INSERT INTO public."NDEvents_api_event" (event_id, title, description, venue, capacity_max, capacity_expected, bookings_available, bookings_made, promotional_code, price, date_start, date_end, date_created, last_updated, launch_date, is_launched, organisers_name_id) VALUES (1, 'Solo: A Star Wars Story', 'During an adventure into a dark criminal underworld, Han Solo meets his future copilot Chewbacca and encounters Lando Calrissian years before joining the Rebellion.', 'Hoyts Wetherill Park', 10000, 10000, 10000, 0, 'DISNEY', 35.00, '2018-05-27 18:00:00.706+00', '2018-05-27 21:00:00.008+00', '2018-05-25 21:53:07.951+00', '2018-05-25 21:53:12.193+00', '2018-05-24 00:00:01.271+00', true, 1);
INSERT INTO public."NDEvents_api_event" (event_id, title, description, venue, capacity_max, capacity_expected, bookings_available, bookings_made, promotional_code, price, date_start, date_end, date_created, last_updated, launch_date, is_launched, organisers_name_id) VALUES (2, 'Deadpool 2', 'After surviving a near fatal bovine attack, a disfigured cafeteria chef (Wade Wilson) struggles to fulfill his dream of becoming Mayberry’s hottest bartender while also learning to cope with his lost sense of taste. Searching to regain his spice for life, as well as a flux capacitor, Wade must battle ninjas, the yakuza, and a pack of sexually aggressive canines, as he journeys around the world to discover the importance of family, friendship, and flavor – finding a new taste for adventure and earning the coveted coffee mug title of World’s Best Lover.', 'HOYTS Blacktown', 100, 75, 100, 0, NULL, 22.00, '2018-05-26 18:00:00+00', '2018-05-26 21:00:00+00', '2018-05-25 12:19:00.734653+00', '2018-05-25 12:19:00.734669+00', NULL, false, 1);
INSERT INTO public."NDEvents_api_event" (event_id, title, description, venue, capacity_max, capacity_expected, bookings_available, bookings_made, promotional_code, price, date_start, date_end, date_created, last_updated, launch_date, is_launched, organisers_name_id) VALUES (3, 'Avengers: Infinity War', 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.', 'HOYTS Chatswood Mandarin', 50, 30, 50, 0, NULL, 25.50, '2018-05-30 19:00:00+00', '2018-05-30 21:50:00+00', '2018-05-25 12:21:46.024893+00', '2018-05-25 12:22:07.431213+00', NULL, false, 1);
INSERT INTO public."NDEvents_api_event" (event_id, title, description, venue, capacity_max, capacity_expected, bookings_available, bookings_made, promotional_code, price, date_start, date_end, date_created, last_updated, launch_date, is_launched, organisers_name_id) VALUES (4, 'Ant-man and The Wasp', 'From the Marvel Cinematic Universe comes "Ant-Man and the Wasp," a new chapter featuring heroes with the astonishing ability to shrink. In the aftermath of "Captain America: Civil War," Scott Lang grapples with the consequences of his choices as both a Super Hero and a father. As he struggles to rebalance his home life with his responsibilities as Ant-Man, he''s confronted by Hope van Dyne and Dr. Hank Pym with an urgent new mission. Scott must once again put on the suit and learn to fight alongside the Wasp as the team works together to uncover secrets from the past.', 'HOYTS Entertainment Quarter', 100, 90, 100, 0, NULL, 22.50, '2018-07-05 20:00:00+00', '2018-07-05 22:48:00+00', '2018-05-25 12:25:43.994114+00', '2018-05-25 12:25:43.994127+00', NULL, false, 1);
INSERT INTO public."NDEvents_api_event" (event_id, title, description, venue, capacity_max, capacity_expected, bookings_available, bookings_made, promotional_code, price, date_start, date_end, date_created, last_updated, launch_date, is_launched, organisers_name_id) VALUES (5, 'Jurassic World: Fallen Kingdom', 'It’s been four years since theme park and luxury resort Jurassic World was destroyed by dinosaurs out of containment.  Isla Nublar now sits abandoned by humans while the surviving dinosaurs fend for themselves in the jungles.

When the island’s dormant volcano begins roaring to life, Owen (Chris Pratt) and Claire (Bryce Dallas Howard) mount a campaign to rescue the remaining dinosaurs from this extinction-level event.  Owen is driven to find Blue, his lead raptor who’s still missing in the wild, and Claire has grown a respect for these creatures she now makes her mission.  Arriving on the unstable island as lava begins raining down, their expedition uncovers a conspiracy that could return our entire planet to a perilous order not seen since prehistoric times', 'Hoyts Chatswood Westfield', 80, 60, 80, 0, NULL, NULL, '2018-06-13 18:00:00+00', '2018-06-13 21:00:00+00', '2018-05-25 12:34:55.651601+00', '2018-05-25 12:34:55.651664+00', NULL, false, 1);
INSERT INTO public."NDEvents_api_event" (event_id, title, description, venue, capacity_max, capacity_expected, bookings_available, bookings_made, promotional_code, price, date_start, date_end, date_created, last_updated, launch_date, is_launched, organisers_name_id) VALUES (6, 'Aquaman', 'Arthur Curry learns that he is the heir to the underwater kingdom of Atlantis, and must step forward to lead his people and to be a hero to the world.', 'Events Moonlight Cinema Sydney', 150, 100, 150, 0, NULL, 15.75, '2018-12-13 19:15:00+00', '2018-12-13 21:50:00+00', '2018-05-25 12:43:42.666891+00', '2018-05-25 12:43:42.666908+00', NULL, false, 1);


--
-- Name: NDEvents_api_event_event_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wano
--

SELECT pg_catalog.setval('public."NDEvents_api_event_event_id_seq"', 6, true);


--
-- Name: NDEvents_api_event NDEvents_api_event_pkey; Type: CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public."NDEvents_api_event"
    ADD CONSTRAINT "NDEvents_api_event_pkey" PRIMARY KEY (event_id);


--
-- Name: NDEvents_api_event_organisers_name_id_778fbe45; Type: INDEX; Schema: public; Owner: wano
--

CREATE INDEX "NDEvents_api_event_organisers_name_id_778fbe45" ON public."NDEvents_api_event" USING btree (organisers_name_id);


--
-- Name: NDEvents_api_event NDEvents_api_event_organisers_name_id_778fbe45_fk; Type: FK CONSTRAINT; Schema: public; Owner: wano
--

ALTER TABLE ONLY public."NDEvents_api_event"
    ADD CONSTRAINT "NDEvents_api_event_organisers_name_id_778fbe45_fk" FOREIGN KEY (organisers_name_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- PostgreSQL database dump complete
--

