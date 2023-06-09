PGDMP                          {            bagirov    14.1    14.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            	           1262    111553    bagirov    DATABASE     d   CREATE DATABASE bagirov WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE bagirov;
                postgres    false            �            1259    111565 	   Companies    TABLE     N  CREATE TABLE public."Companies" (
    id integer NOT NULL,
    full_name character varying NOT NULL,
    name character varying NOT NULL,
    legal_address character varying,
    actual_address character varying,
    site character varying,
    "group" character varying,
    mail character varying,
    password character varying
);
    DROP TABLE public."Companies";
       public         heap    postgres    false            �            1259    111564    Companies_id_seq    SEQUENCE     �   ALTER TABLE public."Companies" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Companies_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    212            �            1259    111571 	   Contracts    TABLE       CREATE TABLE public."Contracts" (
    id integer NOT NULL,
    company integer NOT NULL,
    max_payment numeric,
    min_payment numeric,
    is_open boolean DEFAULT true NOT NULL,
    exector integer,
    tasks character varying NOT NULL,
    skills character varying NOT NULL
);
    DROP TABLE public."Contracts";
       public         heap    postgres    false            �            1259    111570    Contracts_id_seq    SEQUENCE     �   ALTER TABLE public."Contracts" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Contracts_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    214            �            1259    111555    Students    TABLE     2  CREATE TABLE public."Students" (
    id integer NOT NULL,
    name character varying NOT NULL,
    last_name character varying,
    second_name character varying,
    mail character varying NOT NULL,
    password character varying NOT NULL,
    experience character varying,
    about character varying
);
    DROP TABLE public."Students";
       public         heap    postgres    false            �            1259    111554    Students_id_seq    SEQUENCE     �   ALTER TABLE public."Students" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Students_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    210                      0    111565 	   Companies 
   TABLE DATA           x   COPY public."Companies" (id, full_name, name, legal_address, actual_address, site, "group", mail, password) FROM stdin;
    public          postgres    false    212   �                 0    111571 	   Contracts 
   TABLE DATA           m   COPY public."Contracts" (id, company, max_payment, min_payment, is_open, exector, tasks, skills) FROM stdin;
    public          postgres    false    214   W       �          0    111555    Students 
   TABLE DATA           i   COPY public."Students" (id, name, last_name, second_name, mail, password, experience, about) FROM stdin;
    public          postgres    false    210   �       
           0    0    Companies_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Companies_id_seq"', 1, true);
          public          postgres    false    211                       0    0    Contracts_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Contracts_id_seq"', 3, true);
          public          postgres    false    213                       0    0    Students_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Students_id_seq"', 2, true);
          public          postgres    false    209            l           2606    111593    Companies Companies_mail_key 
   CONSTRAINT     [   ALTER TABLE ONLY public."Companies"
    ADD CONSTRAINT "Companies_mail_key" UNIQUE (mail);
 J   ALTER TABLE ONLY public."Companies" DROP CONSTRAINT "Companies_mail_key";
       public            postgres    false    212            n           2606    111577    Companies Companies_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Companies"
    ADD CONSTRAINT "Companies_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."Companies" DROP CONSTRAINT "Companies_pkey";
       public            postgres    false    212            p           2606    111579    Contracts Contracts_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Contracts"
    ADD CONSTRAINT "Contracts_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."Contracts" DROP CONSTRAINT "Contracts_pkey";
       public            postgres    false    214            h           2606    111563    Students Students_mail_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public."Students"
    ADD CONSTRAINT "Students_mail_key" UNIQUE (mail);
 H   ALTER TABLE ONLY public."Students" DROP CONSTRAINT "Students_mail_key";
       public            postgres    false    210            j           2606    111561    Students Students_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Students"
    ADD CONSTRAINT "Students_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Students" DROP CONSTRAINT "Students_pkey";
       public            postgres    false    210            q           2606    111580     Contracts Contracts_company_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Contracts"
    ADD CONSTRAINT "Contracts_company_fkey" FOREIGN KEY (company) REFERENCES public."Companies"(id) NOT VALID;
 N   ALTER TABLE ONLY public."Contracts" DROP CONSTRAINT "Contracts_company_fkey";
       public          postgres    false    3182    214    212            r           2606    111585     Contracts Contracts_exector_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Contracts"
    ADD CONSTRAINT "Contracts_exector_fkey" FOREIGN KEY (exector) REFERENCES public."Students"(id) NOT VALID;
 N   ALTER TABLE ONLY public."Contracts" DROP CONSTRAINT "Contracts_exector_fkey";
       public          postgres    false    210    3178    214               x   x�3估������.L����bӅ�/6q��!PN~Nvj�Cnbf�^Q)��Q����JY�Q�GHZZJxUFRi�qd�E������cX�����K��TVAb1P�W�e�G��W� ��-�         e   x�3�4���qaʅ}6\�xaӅ��/6]�Q��(���ދ��*\ؤ ���ya�=�B�����sa;��taH�b��~�����=... �?:      �   �   x�3��ta��ƋMpƅ}6]�q��3Ə3'?';5�S�(I��@%�0�04�%-;;���8�+2�/�75��2���8��3Yߩة(�����1�%9%+��0dL��19�&f����,�2)M��++r�1	��r2M�(L��Hru�*0/)J-�2pqs��1��5��7�ʄZ���� #U�     