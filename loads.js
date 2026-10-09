// ===================== LOADS.JS =====================
// 1) Lista de invitados
const guests = [
  { id: "1", name: "Familia Franco Pozuelos", passes: 3 },
  { id: "2", name: "Familia Orozco Franco", passes: 4 },
  { id: "3", name: "Yesenia Pineda", passes: 2 },
  { id: "4", name: "Alexander Pineda", passes: 2 },
  { id: "5", name: "Hugo Ramirez", passes: 2 },
  { id: "6", name: "Familia García Alegría", passes: 4 },
  { id: "7", name: "Señora Maribel Recinos", passes: 2 },
  { id: "8", name: "Ana María de la Roca", passes: 2 },
  { id: "9", name: "Familia Sánchez Chávez", passes: 2 },
  { id: "10", name: "Familia Sánchez Menendez", passes: 2 },
  { id: "11", name: "Cindy, Christofer y Angelo", passes: 3 },
  { id: "12", name: "Ingrid Castro", passes: 2 },
  { id: "13", name: "Señorita Sucely Pérez", passes: 2 },
  { id: "14", name: "Cinthia Valle", passes: 2 },
  { id: "15", name: "Darwin Figueroa", passes: 2 },
  { id: "16", name: "Lourdes Simón", passes: 2 },
  { id: "17", name: "Familia Camarero González", passes: 2 },
  { id: "18", name: "Williams Sánchez", passes: 1 },
  { id: "19", name: "Señor Danilo García", passes: 2 },
  { id: "20", name: "Licda. Ziomara de León", passes: 2 },
  { id: "21", name: "Señora Olga Mendoza", passes: 1 },
  { id: "22", name: "Señora Olga Zuleta", passes: 1 },
  { id: "23", name: "Margarita, Kathy y Cristofer", passes: 3 },
  { id: "24", name: "Familia Franco Rivas", passes: 2 },
  { id: "25", name: "Señora Marlen López", passes: 2 },
  { id: "26", name: "Licda. Vivian Mollinedo", passes: 2 },
  { id: "27", name: "Señora Silvia del Cid", passes: 2 },
  { id: "28", name: "Señora Paula Pineda", passes: 1 },
  { id: "29", name: "Vinicio Ramirez", passes: 2 },
  { id: "30", name: "Lilian Ramirez", passes: 2 },
  { id: "31", name: "Señor Hugo Urizar", passes: 1 },
  { id: "32", name: "Señor Douglas Sagastume", passes: 2 },
  { id: "33", name: "Licda. Nancy Castro", passes: 2 },
  { id: "34", name: "Señora Onelia Monterroso", passes: 2 },
  { id: "35", name: "Señorita Nicolle Carles", passes: 2 },
  { id: "36", name: "Señor Eddi González", passes: 2 },
  { id: "37", name: "Señor Marvin Pérez", passes: 2 },
  { id: "38", name: "Arquitecto Otto Ortíz", passes: 2 },
  { id: "39", name: "Alexander Utuy", passes: 2 },
  { id: "40", name: "Familia Folgar Garcia", passes: 4 },
  { id: "41", name: "Familia Gonzalez Gamboa", passes: 5 },
  { id: "42", name: "Señor Robin Hernandez y Señora", passes: 2 },
  { id: "43", name: "Señor Armando Chomo y Señora", passes: 2 },
  { id: "44", name: "Señor Brando Puac y Señora", passes: 2 },
  { id: "45", name: "Señor Eduardo Godinez", passes: 1 },
  { id: "46", name: "Familia Godinez Gonzalez", passes: 3 },
  { id: "47", name: "Familia Gomez Recana", passes: 5 },
  { id: "48", name: "Familia Prado Revolorio", passes: 5 },
  { id: "49", name: "Familia Coc Revolorio", passes: 5 },
  { id: "50", name: "Señor Emanuel Lopez y Señora", passes: 2 },
  { id: "51", name: "Señor Axel Ajin y Señora", passes: 2 },
  { id: "52", name: "Señor Ricardo Escobar y Señora", passes: 2 },
  { id: "53", name: "Señor Walther Lopez y Señora", passes: 2 },
  { id: "54", name: "Señor Elder Ortiz y Señora", passes: 2 },
  { id: "55", name: "Señora Nicole", passes: 2 },
  { id: "56", name: "Señor Jonathan Lopez y Señora", passes: 2 },
  { id: "57", name: "Señor Contreras de la Roca y Señora", passes: 2 },
  { id: "58", name: "Familia Garcia", passes: 3 },
  { id: "59", name: "Señores Tomas Yocute", passes: 2 },
  { id: "60", name: "Señor Adrian Lopez y Señora", passes: 2 },
  { id: "61", name: "Señor Daniel Recinos y Señora", passes: 2 },
  { id: "62", name: "Señora Edgar Colindres y Señora", passes: 2 },
  { id: "63", name: "Señor Yovani Marroquin y Señora", passes: 2 },
  { id: "64", name: "Señor Fernando Mendez y Señora", passes: 2 },
  { id: "65", name: "Señora Arnoldo Escalante y Señora", passes: 2 },
  { id: "66", name: "Señora Luis Armando", passes: 1 },
  { id: "67", name: "Señor y Señora Avea Guerrero", passes: 2 },
  { id: "68", name: "Señor Miguel Utuy y Señora", passes: 2 },
  { id: "69", name: "Señora Monica Subuyuj", passes: 1 },
  { id: "70", name: "Señor Gustavo y Señora", passes: 2 },
  { id: "71", name: "Señor Alejandro y Señora", passes: 2 },
  { id: "72", name: "Señor Francisco y Señora", passes: 2 },
];

window.guests = guests;
window.LocalGuestSeeds = {
  ...(window.LocalGuestSeeds || {}),
  "bryan-jenifer-2026": guests.reduce((acc, guest) => {
    acc[String(guest.id)] = {
      id: String(guest.id),
      nombre: guest.name,
      pases: Number(guest.passes || 1),
      activo: true,
    };
    return acc;
  }, {}),
};

window.seedEventGuestsToFirebase = async function seedEventGuestsToFirebase() {
  const eventId = window.config?.event?.defaultEventId || "bryan-jenifer-2026";
  const rsvpDB = window.RSVPDatabase;
  if (!rsvpDB?.seedEventData) {
    console.warn("RSVPDatabase no está disponible. Revisa que database.js esté cargado.");
    return { ok: false, guests: 0 };
  }

  const result = await rsvpDB.seedEventData(eventId, { force: true });
  console.log(`Evento creado en Firebase con ${result.invitadosSeeded || 0} invitados.`);
  return { ok: true, guests: result.invitadosSeeded || 0, eventId };
};

// Helper: leer parámetros ?id=1
function getQueryParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

function notifyGuestUpdated() {
  window.dispatchEvent(new CustomEvent("guest:updated", { detail: window.currentGuest || null }));
}

function setCurrentGuest(guest) {
  if (!guest) {
    window.currentGuest = null;
    notifyGuestUpdated();
    return;
  }

  window.currentGuest = {
    id: String(guest.id),
    name: String(guest.name || guest.nombre || "Invitado").trim() || "Invitado",
    passes: Math.max(1, Number(guest.passes || guest.pases) || 1),
  };

  const guestNameEl = document.getElementById("guest-name");
  const passesEl = document.getElementById("passes");

  if (guestNameEl) guestNameEl.textContent = window.currentGuest.name;
  if (passesEl) {
    const p = Number(window.currentGuest.passes || 1);
    passesEl.textContent = `${p} ${p === 1 ? "pase" : "pases"}`;
  }

  notifyGuestUpdated();
}

function waitForRSVPDatabase(timeoutMs = 8000) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const timer = window.setInterval(() => {
      if (window.RSVPDatabase?.getInvitadoById) {
        window.clearInterval(timer);
        resolve(window.RSVPDatabase);
        return;
      }

      if (Date.now() - start > timeoutMs) {
        window.clearInterval(timer);
        reject(new Error("RSVPDatabase no disponible."));
      }
    }, 50);
  });
}

async function loadRemoteGuest(guestId) {
  try {
    const db = await waitForRSVPDatabase();
    const eventId = window.config?.event?.defaultEventId || "bryan-jenifer-2026";
    const remoteGuest = await db.getInvitadoById(eventId, guestId);
    if (remoteGuest && remoteGuest.activo !== false) {
      setCurrentGuest(remoteGuest);
    }
  } catch (error) {
    console.warn("No se pudo cargar invitado remoto:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const guestId = getQueryParam("id");

  if (getQueryParam("seedGuests") === "1") {
    window.seedEventGuestsToFirebase();
  }

  // Si no hay id, no marcamos error: solo no hay invitado
  if (!guestId) {
    setCurrentGuest(null);
    return;
  }

  const guest = guests.find((g) => String(g.id) === String(guestId));

  if (guest) {
    setCurrentGuest(guest);
    loadRemoteGuest(guestId);
  } else {
    setCurrentGuest(null);
    loadRemoteGuest(guestId);

    const guestNameEl = document.getElementById("guest-name");
    if (guestNameEl) guestNameEl.textContent = "Invitado no encontrado";
  }

});
