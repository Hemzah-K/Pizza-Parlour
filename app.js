const pizzas = [
  { id: "classic", category: "classic", nameKey: "pizza.classic.name", descriptionKey: "pizza.classic.description", badgeKey: "pizza.classic.badge", tagsKey: "pizza.classic.tags", image: "assets/pizzas/classic.jpg", imageAltKey: "pizza.classic.alt", price: 16, badgeStyle: "" },
  { id: "pepperoni", category: "classic", nameKey: "pizza.pepperoni.name", descriptionKey: "pizza.pepperoni.description", badgeKey: "pizza.pepperoni.badge", tagsKey: "pizza.pepperoni.tags", image: "assets/pizzas/pepperoni.jpg", imageAltKey: "pizza.pepperoni.alt", price: 18, badgeStyle: "badge-red" },
  { id: "mushroom", category: "vegetarian", nameKey: "pizza.mushroom.name", descriptionKey: "pizza.mushroom.description", badgeKey: "pizza.mushroom.badge", tagsKey: "pizza.mushroom.tags", image: "assets/pizzas/mushroom.jpg", imageAltKey: "pizza.mushroom.alt", price: 19, badgeStyle: "" },
  { id: "hot-honey", category: "favorite", nameKey: "pizza.honey.name", descriptionKey: "pizza.honey.description", badgeKey: "pizza.honey.badge", tagsKey: "pizza.honey.tags", image: "assets/pizzas/hot-honey.jpg", imageAltKey: "pizza.honey.alt", price: 20, badgeStyle: "badge-red" },
  { id: "green", category: "vegetarian", nameKey: "pizza.green.name", descriptionKey: "pizza.green.description", badgeKey: "pizza.green.badge", tagsKey: "pizza.green.tags", image: "assets/pizzas/green.jpg", imageAltKey: "pizza.green.alt", price: 18, badgeStyle: "" },
  { id: "white", category: "favorite", nameKey: "pizza.white.name", descriptionKey: "pizza.white.description", badgeKey: "pizza.white.badge", tagsKey: "pizza.white.tags", image: "assets/pizzas/white.jpg", imageAltKey: "pizza.white.alt", price: 17, badgeStyle: "" }
];

const extras = [
  { id: "extra-cheese", nameKey: "extra.cheese", price: 2 },
  { id: "hot-honey", nameKey: "extra.honey", price: 1.5 },
  { id: "olives", nameKey: "extra.olives", price: 1.5 },
  { id: "mushrooms", nameKey: "extra.mushrooms", price: 2 }
];
const sizeOptions = [
  { id: "small", labelKey: "size.small", peopleKey: "size.small.people", adjust: -3 },
  { id: "regular", labelKey: "size.regular", peopleKey: "size.regular.people", adjust: 0 },
  { id: "big", labelKey: "size.big", peopleKey: "size.big.people", adjust: 5 }
];
const categories = ["all", "classic", "favorite", "vegetarian"];
const deliveryThreshold = 35;
const deliveryFee = 3.99;
const taxRate = 0.08;

const translations = {
  nl: {
    "page.title": "Skibidi Pizza — goeie pizza, geen gedoe",
    "page.description": "Echte New York-pizza, gebakken in Delft. Ontdek jouw nieuwe favoriet bij Skibidi Pizza.",
    "skip.content": "Ga naar inhoud", "nav.label": "Hoofdnavigatie", "menu.filters": "Filter pizza’s op categorie",
    "announcement.first": "DEMO-WEBSITE · GEEN ECHTE BESTELLINGEN", "announcement.second": "KAART EN PRIJZEN TER ILLUSTRATIE",
    "nav.menu": "De kaart", "nav.story": "Ons verhaal", "settings.language": "Taal", "settings.theme": "Thema",
    "theme.light": "☀️ Licht", "theme.dark": "🌙 Donker", "theme.kawaii": "🦄 Kawaii",
    "cart.button": "Je tas", "hero.eyebrow": "IN DELFT GEBAKKEN. ELKE DAG.", "hero.title.first": "Goeie pizza.", "hero.title.second": "Geen gedoe.",
    "hero.intro": "Grote New York-slices, eerlijke prijzen en zo’n korst waar je morgen nog aan denkt.", "hero.cta": "Scoor je slice",
    "hero.delivery": "Bestel-flow demo · geen echte bezorging", "hero.reviews.rating": "Dit is een demo", "hero.reviews": "om rustig te proberen", "hero.sticker": "VERS", "hero.sticker.small": "lekker", "hero.sticker.big": "spul ↓",
    "hero.promise.one": "DEEG MET DE HAND GEREKT", "hero.promise.two": "SAUS VERS GEMAAKT", "hero.promise.three": "ALTIJD EEN BEETJE EXTRA KAAS",
    "menu.eyebrow": "HET LEKKERSTE DEEL", "menu.title.first": "Jouw nieuwe", "menu.title.second": "favoriet.",
    "menu.intro": "Met langzaam gerezen deeg, goeie ingrediënten en geen saaie happen.", "menu.link": "Bekijk de hele kaart",
    "menu.count": "{count} pizza’s. Nul slechte keuzes.", "category.all": "Alles wat lekker is", "category.classic": "Klassiekers",
    "category.favorite": "Favorieten", "category.vegetarian": "Vega",
    "pizza.classic.name": "De Klassieker", "pizza.classic.description": "Tomaat, romige mozzarella en basilicum. De slice waarmee het begon.",
    "pizza.classic.badge": "Buurtfavoriet", "pizza.classic.tags": "TOMAAT · MOZZARELLA · BASILICUM", "pizza.classic.alt": "Houtoven-margherita met verse basilicum",
    "pizza.pepperoni.name": "Pepperoni Party", "pizza.pepperoni.description": "Krokante pepperoni, gesmolten kaas en een beetje hot honey. Lekker hoor.",
    "pizza.pepperoni.badge": "Bestseller", "pizza.pepperoni.tags": "PEPPERONI · HOT HONEY", "pizza.pepperoni.alt": "Versgebakken pizza rijk belegd met pepperoni",
    "pizza.mushroom.name": "Mushroom Mood", "pizza.mushroom.description": "Geroosterde paddenstoel, knoflookroom en tijm. Lekker in je element.",
    "pizza.mushroom.badge": "Groen geregeld", "pizza.mushroom.tags": "PADDESTOEL · KNOFLOOK · TIJM", "pizza.mushroom.alt": "Pizza met paddenstoelen en rucola op een rustieke houten tafel",
    "pizza.honey.name": "Hot Honey Hype", "pizza.honey.description": "Hartig, zoet en pittig. Pepperoni met chili-honing die lekker uitpakt.",
    "pizza.honey.badge": "Beetje pit", "pizza.honey.tags": "PEPPERONI · CHILI-HONING", "pizza.honey.alt": "Punt pepperonipizza, vers uit de oven getild",
    "pizza.green.name": "Groen Zonder Gedoe", "pizza.green.description": "Pesto, spinazie en artisjok. Een groene vlag, maar dan op pizza.",
    "pizza.green.badge": "Vega", "pizza.green.tags": "PESTO · SPINAZIE · ARTISJOK", "pizza.green.alt": "Pizza royaal belegd met spinazie en romige ricotta",
    "pizza.white.name": "De Witte", "pizza.white.description": "Wolken ricotta, knoflookolie en mozzarella. Geen rode saus nodig.",
    "pizza.white.badge": "Zonder rode saus", "pizza.white.tags": "RICOTTA · KNOFLOOK · MOZZARELLA", "pizza.white.alt": "Kaasrijke pizzapunten op een houten plank",
    "pizza.from": "vanaf", "pizza.customize": "Pas ’m aan", "pizza.customize.aria": "Pas {name} aan",
    "story.eyebrow": "EEN BEETJE EXTRA LIEFDE IN ELKE SLICE", "story.title.first": "Pizza nemen we", "story.title.second": "lekker serieus.",
    "story.copy": "Behalve onszelf. Die houden we luchtig. Maar deeg? Tomaten? Kaas? Daar gaan we vol voor.", "story.cta": "Proef het verschil",
    "location.eyebrow": "JOUW PIZZA-PEOPLE UIT DELFT", "location.title.first": "Van onze oven", "location.title.second": "naar jouw bank.",
    "location.copy": "Kom gezellig langs of laat ons iets lekkers bezorgen. Je vindt ons aan de Brasserskade 1 in Delft.",
    "location.map": "Plan je route", "location.short": "Delft, NL", "location.country": "Delft, Nederland",
    "founders.eyebrow": "DE GEZICHTEN ACHTER DE PIZZA", "founders.title": "De oprichters",
    "founders.role.founder": "Oprichter", "founders.role.cofounder": "Medeoprichter",
    "contact.phone": "Telefoon", "contact.email": "E-mail", "contact.phone.soon": "Binnenkort bekend", "contact.email.soon": "Binnenkort bekend",
    "location.card.eyebrow": "HIER VIND JE ONS", "location.card.title.first": "Delft. Dichtbij.", "location.card.title.second": "En goed belegd.",
    "location.hours": "Openingstijden delen we zodra de oven aanstaat.",
    "closing.text": "JIJ REGELT DE MENSEN. WIJ DE PIZZA.", "closing.cta": "Bestel iets goeds",
    "footer.made": "GEMAAKT MET GROTE-SLICE-ENERGIE IN DELFT", "footer.legal": "WEES LIEF. EET LEKKER.",
    "cart.eyebrow": "GOEDE SPULLEN", "cart.title": "Je tas", "cart.close": "Sluit je tas", "cart.orderType": "Kies hoe je je bestelling ontvangt",
    "cart.delivery": "Bezorgen", "cart.pickup": "Afhalen", "cart.empty.title": "Je tas is nog een beetje sip.",
    "cart.empty.copy": "Gelukkig is pizza maar één klik weg.", "cart.empty.cta": "Bekijk de kaart",
    "cart.subtotal": "Subtotaal", "cart.tax": "Geschatte btw", "cart.total": "Totaal", "cart.checkout": "Verder naar afrekenen",
    "cart.freeDelivery": "Lekker bezig! Je bezorging is gratis vanaf € 35.", "cart.needFree": "Voeg nog {amount} toe voor gratis bezorging.",
    "cart.pickupNote": "Afhalen gekozen — haal je pizza op aan de Brasserskade 1 in Delft.",
    "cart.deliveryFee": "Bezorgkosten", "cart.pickupFee": "Afhalen", "cart.remove": "Verwijder", "cart.minus": "Haal één {name} weg", "cart.plus": "Voeg één {name} toe",
    "checkout.disclaimer.short": "Dit is een demo. Je betaalt hier niets.", "checkout.close": "Sluit afrekenen", "checkout.eyebrow": "BIJNA PIZZATIJD",
    "checkout.title.first": "Waar mogen we", "checkout.title.second": "de pizza bezorgen?", "checkout.name": "Je naam",
    "checkout.name.placeholder": "Bijv. Alex Slice", "checkout.email.placeholder": "jij@voorbeeld.nl",
    "checkout.phone.placeholder": "+31 6 1234 5678", "checkout.address.placeholder": "Brasserskade 1, Delft",
    "checkout.email": "E-mailadres", "checkout.phone": "Telefoonnummer", "checkout.address": "Bezorgadres",
    "checkout.notes": "Nog iets dat we moeten weten?", "checkout.optional": "(optioneel)", "checkout.notes.placeholder": "Deurcode, extra servetjes, goeie grappen...",
    "checkout.estimated": "Geschat totaal", "checkout.place": "Demo-bestelling plaatsen",
    "checkout.disclaimer": "Deze demo bevestigt alleen je bestelling. Er wordt geen betaling verwerkt.",
    "confirmation.eyebrow": "BESTELGEGEVENS BEVESTIGD", "confirmation.title": "Lekker bezig, {name}.",
    "confirmation.copy": "Je demo-bestelling staat genoteerd. In een echte zaak gingen we nu deeg draaien. Er is geen betaling gedaan.",
    "confirmation.pickup": "Afhalen op de Brasserskade 1, Delft", "confirmation.delivery": "Bezorgen op {address}",
    "confirmation.email": "Bevestiging klaargezet voor {email}", "confirmation.total": "Geschat totaal:",
    "confirmation.finish": "Terug naar al het lekkers",
    "customize.close": "Sluit pizza-aanpassingen", "customize.eyebrow": "MAAK ’M VAN JOU", "customize.title": "Stel je pizza samen",
    "customize.size": "Kies je formaat", "customize.crust": "Kies je korst", "customize.extras": "Extra lekkers",
    "customize.optional": "(mag, hoeft niet)", "customize.add": "In je tas",
    "size.small": '12″ Klein', "size.small.people": "1–2 personen", "size.regular": '14″ Normaal', "size.regular.people": "2–3 personen",
    "size.big": '18″ Lekker groot', "size.big.people": "3–4 personen",
    "crust.classic": "Klassiek — goudbruin en lekker vouwbaar", "crust.thin": "Dun & knapperig — extra crunch",
    "crust.gluten": "Glutenvrij — zelfde slice-energie (+€ 3,00)",
    "extra.cheese": "Extra mozzarella", "extra.honey": "Hot honey drizzle", "extra.olives": "Kalamata-olijven", "extra.mushrooms": "Geroosterde paddenstoel",
    "crust.classic.short": "Klassiek", "crust.thin.short": "Dun & knapperig", "crust.gluten.short": "Glutenvrij",
    "toast.added": "{name} zit in je tas. Goeie keuze."
  },
  en: {
    "page.title": "Skibidi Pizza — proper pizza, zero fuss",
    "page.description": "Real New York-style pizza, baked in Delft. Meet your new favorite at Skibidi Pizza.",
    "skip.content": "Skip to content", "nav.label": "Main navigation", "menu.filters": "Filter pizzas by category",
    "announcement.first": "DEMO SITE · NO REAL ORDERS", "announcement.second": "MENU AND PRICES ARE FOR ILLUSTRATION",
    "nav.menu": "The menu", "nav.story": "Our story", "settings.language": "Language", "settings.theme": "Theme",
    "theme.light": "☀️ Light", "theme.dark": "🌙 Dark", "theme.kawaii": "🦄 Kawaii",
    "cart.button": "Your bag", "hero.eyebrow": "BAKED IN DELFT. EVERY DAY.", "hero.title.first": "Really good pizza.", "hero.title.second": "Zero weird stuff.",
    "hero.intro": "Big New York slices, honest prices, and the kind of crust you think about tomorrow.", "hero.cta": "Find your slice",
    "hero.delivery": "Ordering demo · no real delivery", "hero.reviews.rating": "This is a demo", "hero.reviews": "to explore at your pace", "hero.sticker": "FRESH", "hero.sticker.small": "the good", "hero.sticker.big": "stuff ↓",
    "hero.promise.one": "HAND-STRETCHED DOUGH", "hero.promise.two": "SAUCE MADE FROM SCRATCH", "hero.promise.three": "ALWAYS A LITTLE EXTRA CHEESE",
    "menu.eyebrow": "THE IMPORTANT PART", "menu.title.first": "Meet your new", "menu.title.second": "usual.",
    "menu.intro": "Slow-fermented dough, honest ingredients, and absolutely no boring bites.", "menu.link": "See what’s cooking",
    "menu.count": "{count} pies, zero bad decisions", "category.all": "All the good stuff", "category.classic": "Classics",
    "category.favorite": "Fan favorites", "category.vegetarian": "Veggie",
    "pizza.classic.name": "The Classic", "pizza.classic.description": "Crushed tomato, whole-milk mozz, basil. The one that started it all.",
    "pizza.classic.badge": "Neighborhood fave", "pizza.classic.tags": "TOMATO · MOZZ · BASIL", "pizza.classic.alt": "Wood-fired Margherita topped with fresh basil",
    "pizza.pepperoni.name": "Pepperoni Party", "pizza.pepperoni.description": "Crispy cups, melty cheese, and a little hot honey. You know the deal.",
    "pizza.pepperoni.badge": "Best seller", "pizza.pepperoni.tags": "CUPPED PEP · HOT HONEY", "pizza.pepperoni.alt": "Freshly baked pizza loaded with pepperoni",
    "pizza.mushroom.name": "Mushroom Mood", "pizza.mushroom.description": "Roasty mushrooms, garlic cream, thyme, and main-character energy.",
    "pizza.mushroom.badge": "Plant-ish", "pizza.mushroom.tags": "MUSHROOM · GARLIC · THYME", "pizza.mushroom.alt": "Mushroom and arugula pizza on a rustic wooden table",
    "pizza.honey.name": "Hot Honey Hype", "pizza.honey.description": "Salty, sweet, spicy. Pepperoni and chili honey doing the absolute most.",
    "pizza.honey.badge": "A little spicy", "pizza.honey.tags": "PEP · CHILI HONEY", "pizza.honey.alt": "A cheesy pepperoni slice lifted from a fresh pizza",
    "pizza.green.name": "Green With Envy", "pizza.green.description": "Pesto, spinach, artichoke hearts. A green flag in pizza form.",
    "pizza.green.badge": "Veggie", "pizza.green.tags": "PESTO · SPINACH · ARTICHOKE", "pizza.green.alt": "Pizza topped with spinach and creamy ricotta",
    "pizza.white.name": "The White Pie", "pizza.white.description": "Ricotta clouds, garlic oil, mozz, and no red sauce in sight.",
    "pizza.white.badge": "Sauce-free & proud", "pizza.white.tags": "RICOTTA · GARLIC · MOZZ", "pizza.white.alt": "Cheesy pizza slices served on a wooden board",
    "pizza.from": "from", "pizza.customize": "Make it yours", "pizza.customize.aria": "Customize {name}",
    "story.eyebrow": "A LITTLE MORE LOVE IN EVERY SLICE", "story.title.first": "We take pizza", "story.title.second": "very seriously.",
    "story.copy": "Ourselves, not so much. But the dough? Tomatoes? Cheese? We give those the good stuff.", "story.cta": "Taste the difference",
    "location.eyebrow": "YOUR NEIGHBORHOOD PIZZA PEOPLE", "location.title.first": "From our oven", "location.title.second": "to your couch.",
    "location.copy": "Come say hi or let us bring something delicious to your door. Find us at Brasserskade 1 in Delft.",
    "location.map": "Get directions", "location.short": "Delft, NL", "location.country": "Delft, Netherlands",
    "founders.eyebrow": "THE FACES BEHIND THE PIZZA", "founders.title": "The founders",
    "founders.role.founder": "Founder", "founders.role.cofounder": "Co-founder",
    "contact.phone": "Phone", "contact.email": "Email", "contact.phone.soon": "Coming soon", "contact.email.soon": "Coming soon",
    "location.card.eyebrow": "COME FIND US", "location.card.title.first": "Delft. Close by.", "location.card.title.second": "Extra cheesy.",
    "location.hours": "We’ll share our opening hours when the ovens are on.",
    "closing.text": "YOU BRING THE PEOPLE. WE’LL BRING THE PIZZA.", "closing.cta": "Order something great",
    "footer.made": "MADE WITH BIG SLICE ENERGY IN DELFT", "footer.legal": "BE NICE. EAT WELL.",
    "cart.eyebrow": "THE GOOD STUFF", "cart.title": "Your bag", "cart.close": "Close your bag", "cart.orderType": "Choose how you want your order",
    "cart.delivery": "Delivery", "cart.pickup": "Pickup", "cart.empty.title": "Your bag’s a little lonely.",
    "cart.empty.copy": "Good thing pizza is just a click away.", "cart.empty.cta": "Meet the menu",
    "cart.subtotal": "Subtotal", "cart.tax": "Estimated tax", "cart.total": "Total", "cart.checkout": "On to checkout",
    "cart.freeDelivery": "Nice! Delivery is on us over €35.", "cart.needFree": "Add {amount} for free delivery.",
    "cart.pickupNote": "Pickup selected — come see us at Brasserskade 1 in Delft.",
    "cart.deliveryFee": "Delivery", "cart.pickupFee": "Pickup", "cart.remove": "Remove", "cart.minus": "Remove one {name}", "cart.plus": "Add one {name}",
    "checkout.disclaimer.short": "This is a demo. No payment will be taken.", "checkout.close": "Close checkout", "checkout.eyebrow": "ALMOST PIZZA TIME",
    "checkout.title.first": "Where should we", "checkout.title.second": "send the good stuff?", "checkout.name": "Your name",
    "checkout.name.placeholder": "e.g. Alex Slice", "checkout.email.placeholder": "you@example.com",
    "checkout.phone.placeholder": "+31 6 1234 5678", "checkout.address.placeholder": "Brasserskade 1, Delft",
    "checkout.email": "Email address", "checkout.phone": "Phone number", "checkout.address": "Delivery address",
    "checkout.notes": "Anything we should know?", "checkout.optional": "(optional)", "checkout.notes.placeholder": "Door code, extra napkins, good jokes...",
    "checkout.estimated": "Estimated total", "checkout.place": "Place demo order",
    "checkout.disclaimer": "This demo confirms your order details only. No payment will be taken.",
    "confirmation.eyebrow": "ORDER DETAILS CONFIRMED", "confirmation.title": "Looking good, {name}.",
    "confirmation.copy": "Your demo order is in our books. In a real shop, we’d be stretching the dough right now. No payment was taken.",
    "confirmation.pickup": "Pickup at Brasserskade 1, Delft", "confirmation.delivery": "Delivery to {address}",
    "confirmation.email": "Confirmation prepared for {email}", "confirmation.total": "Estimated total:",
    "confirmation.finish": "Back to the good stuff",
    "customize.close": "Close pizza customizer", "customize.eyebrow": "MAKE IT YOURS", "customize.title": "Build your pizza",
    "customize.size": "Pick your size", "customize.crust": "Choose your crust", "customize.extras": "Extra good things",
    "customize.optional": "(optional)", "customize.add": "Add to bag",
    "size.small": '12″ Small', "size.small.people": "1–2 people", "size.regular": '14″ Regular', "size.regular.people": "2–3 people",
    "size.big": '18″ Big slice', "size.big.people": "3–4 people",
    "crust.classic": "Classic — golden and made to fold", "crust.thin": "Thin & crispy — extra crunch",
    "crust.gluten": "Gluten-free — same big slice energy (+€3)",
    "extra.cheese": "Extra mozzarella", "extra.honey": "Hot honey drizzle", "extra.olives": "Kalamata olives", "extra.mushrooms": "Roasted mushrooms",
    "crust.classic.short": "Classic", "crust.thin.short": "Thin & crispy", "crust.gluten.short": "Gluten-free",
    "toast.added": "{name} is in your bag. Nice choice."
  }
};

const validThemes = ["light", "dark", "kawaii"];
const validLanguages = ["nl", "en"];
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const t = (key, values = {}) => {
  const message = translations[language][key] || translations.nl[key] || key;
  return message.replace(/\{(\w+)\}/g, (_, name) => values[name] ?? "");
};
const money = (amount) => new Intl.NumberFormat(language === "nl" ? "nl-NL" : "en-NL", { style: "currency", currency: "EUR" }).format(amount);
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const getSetting = (key, validValues, fallback) => {
  try {
    const stored = localStorage.getItem(key);
    return validValues.includes(stored) ? stored : fallback;
  } catch (error) {
    console.warn(`Saved ${key} preference could not be read.`, error);
    return fallback;
  }
};
const saveSetting = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.warn(`Your ${key} preference could not be saved.`, error);
  }
};
let language = getSetting("skibidi-pizza-language", validLanguages, "nl");
let theme = getSetting("skibidi-pizza-theme", validThemes, "light");

function pizzaPhoto(pizza, decorative = false) {
  const alt = decorative ? "" : escapeHtml(t(pizza.imageAltKey));
  return `<img class="pizza-photo" src="${pizza.image}" alt="${alt}" loading="lazy" decoding="async">`;
}

let activeCategory = categories[0];
let activePizza = pizzas[0];
let selectedSize = "regular";
let orderType = "delivery";
let cart = loadCart();
let lastFocused = null;
let toastTimeout;

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("skibidi-pizza-cart") || "[]");
    return Array.isArray(saved) ? saved.filter((item) => item && pizzas.some((pizza) => pizza.id === item.pizzaId) && Number.isFinite(item.price) && Number.isInteger(item.quantity) && item.quantity > 0) : [];
  } catch (error) {
    console.warn("Saved cart could not be read.", error);
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem("skibidi-pizza-cart", JSON.stringify(cart));
  } catch (error) {
    console.warn("Your cart could not be saved between visits.", error);
  }
}

function applyPreferences() {
  document.documentElement.lang = language;
  document.title = t("page.title");
  $('meta[name="description"]').setAttribute("content", t("page.description"));
  $('meta[name="theme-color"]').setAttribute("content", theme === "dark" ? "#171521" : theme === "kawaii" ? "#fff0f8" : "#f6f1e8");
  document.body.dataset.theme = theme;
  $("[data-language-select]").value = language;
  $("[data-theme-select]").value = theme;
  $$("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  $$("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });
  $$("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });
  $$("[data-i18n-option]").forEach((element) => {
    element.textContent = t(element.dataset.i18nOption);
  });
  $$("[data-order-type]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.orderType === orderType));
  });
  renderCategories();
  renderMenu();
  renderCart();
  if (!$("[data-customize-backdrop]").hidden) {
    renderCustomizerControls();
    updateCustomizePrice();
  }
}

function setLanguage(value) {
  if (!validLanguages.includes(value) || language === value) return;
  language = value;
  saveSetting("skibidi-pizza-language", language);
  applyPreferences();
}

function setTheme(value) {
  if (!validThemes.includes(value) || theme === value) return;
  theme = value;
  saveSetting("skibidi-pizza-theme", theme);
  applyPreferences();
}

function renderCategories() {
  $("[data-category-list]").innerHTML = categories.map((category) => `<button class="category-chip${category === activeCategory ? " is-active" : ""}" type="button" data-category="${category}" aria-pressed="${category === activeCategory}">${escapeHtml(t(`category.${category}`))}</button>`).join("");
}

function renderMenu() {
  const visiblePizzas = activeCategory === "all" ? pizzas : pizzas.filter((pizza) => pizza.category === activeCategory);
  $("[data-menu-count]").textContent = t("menu.count", { count: visiblePizzas.length });
  $("[data-menu-grid]").innerHTML = visiblePizzas.map((pizza) => `
    <article class="pizza-card">
      <div class="pizza-visual">${pizzaPhoto(pizza)}<span class="pizza-badge ${pizza.badgeStyle}">${escapeHtml(t(pizza.badgeKey))}</span></div>
      <div class="pizza-info"><div class="pizza-info-top"><h3>${escapeHtml(t(pizza.nameKey))}</h3><span class="pizza-price">${escapeHtml(t("pizza.from"))} ${money(pizza.price - 3)}</span></div><p>${escapeHtml(t(pizza.descriptionKey))}</p>
        <div class="pizza-card-footer"><span class="pizza-tags">${escapeHtml(t(pizza.tagsKey))}</span><button type="button" class="customize-button" data-customize="${pizza.id}" aria-label="${escapeHtml(t("pizza.customize.aria", { name: t(pizza.nameKey) }))}">${escapeHtml(t("pizza.customize"))} <span aria-hidden="true">+</span></button></div>
      </div>
    </article>`).join("");
}

function itemTotal(item) {
  return item.price * item.quantity;
}

function cartSubtotal() {
  return cart.reduce((sum, item) => sum + itemTotal(item), 0);
}

function cartQuantity() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function calculateTotals() {
  const subtotal = cartSubtotal();
  const fee = orderType === "pickup" || subtotal >= deliveryThreshold || subtotal === 0 ? 0 : deliveryFee;
  const tax = subtotal * taxRate;
  return { subtotal, tax, fee, total: subtotal + tax + fee };
}

function renderCart() {
  const totals = calculateTotals();
  const quantity = cartQuantity();
  const count = $("[data-cart-count]");
  count.textContent = quantity;
  $("[data-open-cart]").setAttribute("aria-label", language === "nl"
    ? `Open je tas, ${quantity} ${quantity === 1 ? "item" : "items"}`
    : `Open your bag, ${quantity} ${quantity === 1 ? "item" : "items"}`);
  $("[data-drawer-count]").textContent = `(${quantity})`;
  $("[data-cart-empty]").hidden = quantity > 0;
  $("[data-cart-footer]").hidden = quantity === 0;
  $("[data-cart-items]").hidden = quantity === 0;
  $("[data-cart-items]").innerHTML = cart.map((item) => {
    const pizza = pizzas.find((entry) => entry.id === item.pizzaId);
    const toppingText = (item.extras || []).length ? ` + ${item.extras.map((extra) => escapeHtml(t(extras.find((option) => option.id === extra.id)?.nameKey || extra.label))).join(", ")}` : "";
    const size = sizeOptions.find((option) => option.id === item.sizeId);
    const crustId = { "Thin & crispy": "thin", "Gluten-free": "gluten-free", Classic: "classic" }[item.crust] || item.crust || "classic";
    const crust = t(`crust.${crustId === "gluten-free" ? "gluten" : crustId}.short`);
    return `<article class="cart-item"><div class="cart-thumb">${pizzaPhoto(pizza, true)}</div><div><h3>${escapeHtml(t(pizza.nameKey))}</h3><p class="cart-item-detail">${escapeHtml(size ? t(size.labelKey) : item.sizeLabel)} · ${escapeHtml(crust)}${toppingText}</p><div class="quantity-control"><button type="button" data-quantity="${escapeHtml(item.key)}" data-delta="-1" aria-label="${escapeHtml(t("cart.minus", { name: t(pizza.nameKey) }))}">−</button><span>${item.quantity}</span><button type="button" data-quantity="${escapeHtml(item.key)}" data-delta="1" aria-label="${escapeHtml(t("cart.plus", { name: t(pizza.nameKey) }))}">+</button></div></div><div class="cart-item-price"><span>${money(itemTotal(item))}</span><button type="button" class="remove-item" data-remove="${escapeHtml(item.key)}">${escapeHtml(t("cart.remove"))}</button></div></article>`;
  }).join("");
  $("[data-subtotal]").textContent = money(totals.subtotal);
  $("[data-tax]").textContent = money(totals.tax);
  $("[data-fee]").textContent = money(totals.fee);
  $("[data-total]").textContent = money(totals.total);
  $("[data-fee-label]").textContent = orderType === "pickup" ? t("cart.pickupFee") : t("cart.deliveryFee");
  $("[data-delivery-note]").textContent = orderType === "pickup"
    ? t("cart.pickupNote")
    : totals.subtotal >= deliveryThreshold
      ? t("cart.freeDelivery")
      : t("cart.needFree", { amount: money(deliveryThreshold - totals.subtotal) });
}

function setModalOpen(modal, backdrop, open) {
  if (open) {
    lastFocused = document.activeElement;
    modal.inert = false;
    modal.setAttribute("aria-hidden", "false");
    backdrop.hidden = false;
    document.body.classList.add("is-locked");
    requestAnimationFrame(() => {
      modal.classList.add("is-open");
      const focusTarget = modal.querySelector("button, input, select, textarea");
      if (focusTarget) focusTarget.focus();
    });
  } else {
    modal.classList.remove("is-open");
    modal.inert = true;
    modal.setAttribute("aria-hidden", "true");
    backdrop.hidden = true;
    document.body.classList.remove("is-locked");
    if (lastFocused && document.contains(lastFocused)) lastFocused.focus();
  }
}

function openCart() {
  lastFocused = document.activeElement;
  const drawer = $("[data-cart-drawer]");
  drawer.inert = false;
  drawer.setAttribute("aria-hidden", "false");
  $("[data-cart-overlay]").hidden = false;
  document.body.classList.add("is-locked");
  requestAnimationFrame(() => {
    drawer.classList.add("is-open");
    $("[data-close-cart]").focus();
  });
}

function closeCart() {
  const drawer = $("[data-cart-drawer]");
  drawer.classList.remove("is-open");
  drawer.inert = true;
  drawer.setAttribute("aria-hidden", "true");
  $("[data-cart-overlay]").hidden = true;
  document.body.classList.remove("is-locked");
  if (lastFocused && document.contains(lastFocused)) lastFocused.focus();
}

function openCustomizer(pizza) {
  activePizza = pizza;
  selectedSize = "regular";
  $("[data-extras-list]").replaceChildren();
  $("[data-crust-select]").value = "classic";
  renderCustomizerControls();
  updateCustomizePrice();
  setModalOpen($("[data-customize-modal]"), $("[data-customize-backdrop]"), true);
}

function renderCustomizerControls() {
  const checkedExtras = new Set($$("[data-extra]:checked").map((input) => input.value));
  $("[data-customize-art]").innerHTML = pizzaPhoto(activePizza, true);
  $("[data-customize-description]").textContent = t(activePizza.descriptionKey);
  $("[data-size-options]").innerHTML = sizeOptions.map((size) => `<button type="button" class="size-option${size.id === selectedSize ? " is-selected" : ""}" data-size="${size.id}" aria-pressed="${size.id === selectedSize}"><strong>${escapeHtml(t(size.labelKey))}</strong>${escapeHtml(t(size.peopleKey))}</button>`).join("");
  $("[data-extras-list]").innerHTML = extras.map((extra) => `<label class="extra-option"><input type="checkbox" value="${extra.id}" data-extra${checkedExtras.has(extra.id) ? " checked" : ""}><span>${escapeHtml(t(extra.nameKey))}</span><span class="extra-price">+${money(extra.price)}</span></label>`).join("");
  const select = $("[data-crust-select]");
  const currentCrust = select.value || "classic";
  select.innerHTML = [
    ["classic", "crust.classic"],
    ["thin", "crust.thin"],
    ["gluten-free", "crust.gluten"]
  ].map(([value, key]) => `<option value="${value}">${escapeHtml(t(key))}</option>`).join("");
  select.value = currentCrust;
}

function getCustomization() {
  const size = sizeOptions.find((option) => option.id === selectedSize);
  const selectedExtras = $$("[data-extra]:checked").map((input) => extras.find((extra) => extra.id === input.value));
  const crust = $("[data-crust-select]").value;
  const crustPrice = crust === "gluten-free" ? 3 : 0;
  const price = activePizza.price + size.adjust + crustPrice + selectedExtras.reduce((sum, extra) => sum + extra.price, 0);
  return { size, selectedExtras, crust, price };
}

function updateCustomizePrice() {
  $("[data-customized-price]").textContent = money(getCustomization().price);
}

function showToast(message) {
  const toast = $("[data-toast]");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function addCustomizedPizza() {
  const selection = getCustomization();
  const item = {
    key: `${activePizza.id}-${selection.size.id}-${selection.crust}-${selection.selectedExtras.map((extra) => extra.id).sort().join(".")}`,
    pizzaId: activePizza.id,
    sizeId: selection.size.id,
    sizeLabel: t(selection.size.labelKey),
    crust: selection.crust,
    extras: selection.selectedExtras,
    price: selection.price,
    quantity: 1
  };
  const existing = cart.find((entry) => entry.key === item.key);
  if (existing) existing.quantity += 1;
  else cart.push(item);
  saveCart();
  renderCart();
  setModalOpen($("[data-customize-modal]"), $("[data-customize-backdrop]"), false);
  showToast(t("toast.added", { name: t(activePizza.nameKey) }));
}

function setOrderType(type) {
  orderType = type;
  $$("[data-order-type]").forEach((button) => {
    const selected = button.dataset.orderType === type;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  renderCart();
}

function updateQuantity(key, delta) {
  const item = cart.find((entry) => entry.key === key);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity < 1) cart = cart.filter((entry) => entry.key !== key);
  saveCart();
  renderCart();
}

function beginCheckout() {
  if (!cart.length) return;
  closeCart();
  const totals = calculateTotals();
  const itemSummary = cart.map((item) => `${item.quantity} × ${t(pizzas.find((pizza) => pizza.id === item.pizzaId).nameKey)}`).join(", ");
  $("[data-checkout-summary]").textContent = `${itemSummary} · ${orderType === "pickup" ? t("cart.pickup") : t("cart.delivery")}`;
  $("[data-checkout-total]").textContent = money(totals.total);
  const addressField = $("[data-address-field]");
  const address = $('input[name="address"]');
  addressField.hidden = orderType === "pickup";
  address.required = orderType === "delivery";
  $("[data-notes-field]").hidden = false;
  $("[data-checkout-form-view]").hidden = false;
  $("[data-confirmation-view]").hidden = true;
  setModalOpen($("[data-checkout-modal]"), $("[data-checkout-backdrop]"), true);
}

function completeOrder(event) {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const formData = new FormData(form);
  const name = String(formData.get("name")).trim();
  const email = String(formData.get("email")).trim();
  const address = String(formData.get("address")).trim();
  const totals = calculateTotals();
  const confirmationCode = `SK-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
  const fulfillment = orderType === "pickup"
    ? t("confirmation.pickup")
    : t("confirmation.delivery", { address: escapeHtml(address) });
  const confirmation = $("[data-confirmation-view]");
  confirmation.innerHTML = `<div class="confirmation-icon" aria-hidden="true">✓</div><p class="eyebrow eyebrow-red">${escapeHtml(t("confirmation.eyebrow"))}</p><h2>${escapeHtml(t("confirmation.title", { name: name.split(/\s+/)[0] }))}</h2><p>${escapeHtml(t("confirmation.copy"))}</p><div class="confirmation-order"><strong>${confirmationCode}</strong><br>${fulfillment}<br>${escapeHtml(t("confirmation.email", { email }))}<br>${escapeHtml(t("confirmation.total"))} <strong>${money(totals.total)}</strong></div><button class="button button-dark" type="button" data-finish-order>${escapeHtml(t("confirmation.finish"))} <span aria-hidden="true">↗</span></button>`;
  $("[data-checkout-form-view]").hidden = true;
  confirmation.hidden = false;
  cart = [];
  saveCart();
  renderCart();
  confirmation.querySelector("[data-finish-order]").addEventListener("click", () => setModalOpen($("[data-checkout-modal]"), $("[data-checkout-backdrop]"), false));
}

document.addEventListener("click", (event) => {
  const category = event.target.closest("[data-category]");
  if (category) {
    activeCategory = category.dataset.category;
    renderCategories();
    renderMenu();
  }
  const customize = event.target.closest("[data-customize]");
  if (customize) openCustomizer(pizzas.find((pizza) => pizza.id === customize.dataset.customize));
  const size = event.target.closest("[data-size]");
  if (size) {
    selectedSize = size.dataset.size;
    $$("[data-size]").forEach((button) => {
      const selected = button.dataset.size === selectedSize;
      button.classList.toggle("is-selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    updateCustomizePrice();
  }
  const orderButton = event.target.closest("[data-order-type]");
  if (orderButton) setOrderType(orderButton.dataset.orderType);
  const quantity = event.target.closest("[data-quantity]");
  if (quantity) updateQuantity(quantity.dataset.quantity, Number(quantity.dataset.delta));
  const remove = event.target.closest("[data-remove]");
  if (remove) {
    cart = cart.filter((item) => item.key !== remove.dataset.remove);
    saveCart();
    renderCart();
  }
});

document.addEventListener("change", (event) => {
  if (event.target.matches("[data-language-select]")) setLanguage(event.target.value);
  if (event.target.matches("[data-theme-select]")) setTheme(event.target.value);
  if (event.target.matches("[data-extra], [data-crust-select]")) updateCustomizePrice();
});

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-open-cart]")) openCart();
  if (event.target.closest("[data-close-cart]") || event.target.matches("[data-cart-overlay]")) closeCart();
  if (event.target.closest("[data-close-customize]") || event.target.matches("[data-customize-backdrop]")) setModalOpen($("[data-customize-modal]"), $("[data-customize-backdrop]"), false);
  if (event.target.closest("[data-close-checkout]") || event.target.matches("[data-checkout-backdrop]")) setModalOpen($("[data-checkout-modal]"), $("[data-checkout-backdrop]"), false);
  if (event.target.closest("[data-add-customized]")) addCustomizedPizza();
  if (event.target.closest("[data-checkout]")) beginCheckout();
});

$("[data-checkout-form]").addEventListener("submit", completeOrder);
document.addEventListener("keydown", (event) => {
  const activeDialog = !$("[data-checkout-backdrop]").hidden
    ? $("[data-checkout-modal]")
    : !$("[data-customize-backdrop]").hidden
      ? $("[data-customize-modal]")
      : !$("[data-cart-overlay]").hidden
        ? $("[data-cart-drawer]")
        : null;
  if (event.key === "Tab" && activeDialog) {
    const focusable = [...activeDialog.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])')]
      .filter((element) => !element.closest("[hidden]"));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!first) {
      event.preventDefault();
      activeDialog.focus();
    } else if (event.shiftKey && (document.activeElement === first || !activeDialog.contains(document.activeElement))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (document.activeElement === last || !activeDialog.contains(document.activeElement))) {
      event.preventDefault();
      first.focus();
    }
  }
  if (event.key === "Escape") {
    if (!$("[data-checkout-backdrop]").hidden) setModalOpen($("[data-checkout-modal]"), $("[data-checkout-backdrop]"), false);
    else if (!$("[data-customize-backdrop]").hidden) setModalOpen($("[data-customize-modal]"), $("[data-customize-backdrop]"), false);
    else if (!$("[data-cart-overlay]").hidden) closeCart();
  }
});
$("[data-year]").textContent = new Date().getFullYear();
applyPreferences();
