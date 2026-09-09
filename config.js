const config = {
    event: {
        defaultEventId: "bryan-jenifer-2026",
        eventIdParam: "eventId",
        legacyFallback: {
            read: false,
            write: false,
            subscribe: false
        }
    },

    admin: {
        adminKey: "twodesign123",
        keyParam: "key",
        legacyKeyParam: "admin"
    },

    seo: {
        titulo: "Bryan Folgar & Jenifer Arrivillaga | Boda 2026",
        descripcion: "Boda de Bryan Folgar y Jenifer Arrivillaga - 7 de noviembre de 2026",
        autor: "Two Design"
    },

    pareja: {
        nombres: "Bryan Folgar & Jenifer Arrivillaga",
        fecha: "07-11-2026",
        fechaVisible: "07.11.2026"
    },

    musica: {
        titulo: "Nuestra Canción",
        archivo: "music.mp3"
    },

    evento: {
        ceremonia: {
            titulo: "Ceremonia",
            lugar: "Rectoría San Agustín",
            hora: "5:00 PM",
            direccion: "Zona 1, Ciudad de Guatemala",
            ubicacionUrl: "https://www.google.com/maps/place/Rector%C3%ADa+San+Agust%C3%ADn/@14.6383849,-90.5183272,17z/data=!4m6!3m5!1s0x8589a219daaf9d7f:0x2914c3271308971f!8m2!3d14.6385616!4d-90.5157207!16s%2Fg%2F1vntk6rn?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D"
        },
        recepcion: {
            titulo: "Recepción",
            lugar: "Club Guatemala",
            hora: "7:00 PM",
            direccion: "",
            ubicacionUrl: "https://www.google.com/maps/place/Club+Guatemala/data=!4m2!3m1!1s0x0:0x38ca3e9e7e81fac2?sa=X&ved=1t:2428&ictx=111"
        }
    },

    textos: {
        mensajeInvitado: "Eres muy especial para nosotros",
        mensajePases: "Hemos reservado para ti {pases} lugares especiales"
    },

    footer: {
        hashtag: "#BryanYJenifer",
        instagramUrl: "https://www.instagram.com/thetwodesign",
        facebookUrl: "https://www.facebook.com/thetwodesign",
        marcaTexto: "Diseño",
        marcaNombre: "Two Design",
        marcaUrl: "https://twodesign.com"
    }
};

window.config = config;
