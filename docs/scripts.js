// Initialize Firebase (replace with your Firebase config)
const firebaseConfig = {
    apiKey: "Your_API_KEY",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "ypur-project-id.appspot.com",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id",
};

// Surah data with additional profile information
// This data structure contains the Surah names, verse counts, and additional profile information.
const surahData = { 
    "Al-Fatiha": { verseCount: 7, surahNumber: 1 , profile: { name: "Al-Fatiha", place: "Mecca", theme: "Prayer and Guidance" }},
    "Al-Baqarah": { verseCount: 286, surahNumber: 2, profile: { name: "Al-Baqarah", place: "Medina", theme: "Guidance for Mankind" }},
    "Al-Imran": { verseCount: 200, surahNumber: 3, profile: { name: "Al-Imran", place: "Medina", theme: "Family and Community" }},
    "An-Nisa": { verseCount: 176, surahNumber: 4, profile: { name: "An-Nisa", place: "Medina"}},
    "Al-Ma'idah": { verseCount: 120, surahNumber: 5, profile: { name: "Al-Ma'idah", place: "Medina", theme: "Law and Ethics" }},
    "Al-An'am": { verseCount: 165, surahNumber: 6, profile: { name: "Al-An'am", place: "Mecca", theme: "Faith and Worship" }},
    "Al-A'raf": { verseCount: 206, surahNumber: 7, profile: { name: "Al-A'raf", place: "Mecca", theme: "Prophets and Communities" }},
    "Al-Anfal": { verseCount: 75, surahNumber: 8, profile: { name: "Al-Anfal", place: "Medina", theme: "War and Peace" }},
    "At-Tawbah": { verseCount: 129, surahNumber: 9, profile: { name: "At-Tawbah", place: "Medina", theme: "Repentance and Forgiveness" }},
    "Yunus": { verseCount: 109, surahNumber: 10, profile: { name: "Yunus", place: "Mecca", theme: "Prophethood and Revelation" }},
    "Hud": { verseCount: 123, surahNumber: 11, profile: { name: "Hud", place: "Mecca", theme: "Faith and Patience" }},
    "Yusuf": { verseCount: 111, surahNumber: 12, profile: { name: "Yusuf", place: "Mecca", theme: "Story of Joseph" }},
    "Ar-Ra'd": { verseCount: 43, surahNumber: 13, profile: { name: "Ar-Ra'd", place: "Medina", theme: "Divine Power" }},
    "Ibrahim": { verseCount: 52, surahNumber: 14, profile: { name: "Ibrahim", place: "Mecca", theme: "Prophets and Gratitude" }},
    "Al-Hijr": { verseCount: 99, surahNumber: 15, profile: { name: "Al-Hijr", place: "Mecca", theme: "Divine Protection" }},
    "An-Nahl": { verseCount: 128, surahNumber: 16, profile: { name: "An-Nahl", place: "Mecca", theme: "Divine Mercy" }},
    "Al-Isra": { verseCount: 111, surahNumber: 17, profile: { name: "Al-Isra", place: "Mecca", theme: "Night Journey and Ascension" }},
    "Al-Kahf": { verseCount: 110, surahNumber: 18, profile: { name: "Al-Kahf", place: "Mecca", theme: "Tests of Faith" }},
    "Maryam": { verseCount: 98, surahNumber: 19, profile: { name: "Maryam", place: "Mecca", theme: "Miracles and Prophets" }},
    "Ta-Ha": { verseCount: 135, surahNumber: 20, profile: { name: "Ta-Ha", place: "Mecca", theme: "Moses and Revelation" }},
    "Al-Anbiya": { verseCount: 112, surahNumber: 21, profile: { name: "Al-Anbiya", place: "Mecca", theme: "Prophets and Their Communities" }},
    "Al-Hajj": { verseCount: 78, surahNumber: 22, profile: { name: "Al-Hajj", place: "Medina", theme: "Pilgrimage and Worship" }},
    "Al-Mu'minun": { verseCount: 118, surahNumber: 23, profile: { name: "Al-Mu'minun", place: "Medina", theme: "Believers and Their Characteristics" }},
    "An-Nur": { verseCount: 64, surahNumber: 24, profile: { name: "An-Nur", place: "Medina", theme: "Social Conduct and Ethics" }},
    "Al-Furqan": { verseCount: 77, surahNumber: 25, profile: { name: "Al-Furqan", place: "Mecca", theme: "Criteria for Right and Wrong" }},
    "Ash-Shu'ara": { verseCount: 227, surahNumber: 26, profile: { name: "Ash-Shu'ara", place: "Mecca", theme: "Poets and Prophets" }},
    "An-Naml": { verseCount: 93, surahNumber: 27, profile: { name: "An-Naml", place: "Mecca", theme: "Signs of God" }},
    "Al-Qasas": { verseCount: 88, surahNumber: 28, profile: { name: "Al-Qasas", place: "Mecca", theme: "Stories of the Prophets" }},
    "Al-Ankabut": { verseCount: 69, surahNumber: 29, profile: { name: "Al-Ankabut", place: "Mecca", theme: "Tests of Faith" }},
    "Ar-Rum": { verseCount: 60, surahNumber: 30, profile: { name: "Ar-Rum", place: "Mecca", theme: "Signs of God in the Universe" }},
    "Luqman": { verseCount: 34, surahNumber: 31, profile: { name: "Luqman", place: "Mecca", theme: "Wisdom and Guidance" }},
    "As-Sajda": { verseCount: 30, surahNumber: 32, profile: { name: "As-Sajda", place: "Mecca", theme: "Creation and Resurrection" }},
    "Al-Ahzab": { verseCount: 73, surahNumber: 33, profile: { name: "Al-Ahzab", place: "Medina", theme: "Community and Social Issues" }},
    "Saba": { verseCount: 54, surahNumber: 34, profile: { name: "Saba", place: "Mecca", theme: "Divine Power and Mercy" }},
    "Fatir": { verseCount: 45, surahNumber: 35, profile: { name: "Fatir", place: "Mecca", theme: "Creation and Divine Mercy" }},
    "Ya-Sin": { verseCount: 83, surahNumber: 36, profile: { name: "Ya-Sin", place: "Mecca", theme: "The Heart of the Quran" }},
    "As-Saffat": { verseCount: 182, surahNumber: 37, profile: { name: "As-Saffat", place: "Mecca", theme: "Unity of God" }},
    "Sad": { verseCount: 88, surahNumber: 38, profile: { name: "Sad", place: "Mecca", theme: "Prophets and Their Communities" }},
    "Az-Zumar": { verseCount: 75, surahNumber: 39, profile: { name: "Az-Zumar", place: "Mecca", theme: "The Groups" }},
    "Ghafir": { verseCount: 85, surahNumber: 40, profile: { name: "Ghafir", place: "Mecca", theme: "Forgiveness and Mercy" }},
    "Fussilat": { verseCount: 54, surahNumber: 41, profile: { name: "Fussilat", place: "Mecca", theme: "The Detailed Verses" }},
    "Ash-Shura": { verseCount: 53, surahNumber: 42, profile: { name: "Ash-Shura", place: "Mecca", theme: "Consultation and Unity" }},
    "Az-Zukhruf": { verseCount: 89, surahNumber: 43, profile: { name: "Az-Zukhruf", place: "Mecca", theme: "Gold and Silver" }},
    "Ad-Dukhan": { verseCount: 59, surahNumber: 44, profile: { name: "Ad-Dukhan", place: "Mecca", theme: "The Smoke" }},
    "Al-Jathiya": { verseCount: 37, surahNumber: 45, profile: { name: "Al-Jathiya", place: "Mecca", theme: "The Crouching" }},
    "Al-Ahqaf": { verseCount: 35, surahNumber: 46, profile: { name: "Al-Ahqaf", place: "Mecca", theme: "The Wind-Curved Sandhills" }},
    "Muhammad": { verseCount: 38, surahNumber: 47, profile: { name: "Muhammad", place: "Medina", theme: "The Prophet" }},
    "Al-Fath": { verseCount: 29, surahNumber: 48, profile: { name: "Al-Fath", place: "Medina", theme: "The Victory" }},
    "Al-Hujurat": { verseCount: 18, surahNumber: 49, profile: { name: "Al-Hujurat", place: "Medina", theme: "The Chambers" }},
    "Qaf": { verseCount: 45, surahNumber: 50, profile: { name: "Qaf", place: "Mecca", theme: "The Letter Qaf" }},
    "Adh-Dhariyat": { verseCount: 60, surahNumber: 51, profile: { name: "Adh-Dhariyat", place: "Mecca", theme: "The Winnowing Winds" }},
    "At-Tur": { verseCount: 49, surahNumber: 52, profile: { name: "At-Tur", place: "Mecca", theme: "The Mount" }},
    "An-Najm": { verseCount: 62, surahNumber: 53, profile: { name: "An-Najm", place: "Mecca", theme: "The Star" }},
    "Al-Qamar": { verseCount: 55, surahNumber: 54, profile: { name: "Al-Qamar", place: "Mecca", theme: "The Moon" }},
    "Ar-Rahman": { verseCount: 78, surahNumber: 55, profile: { name: "Ar-Rahman", place: "Medina", theme: "The Beneficent" }},
    "Al-Waqia": { verseCount: 96, surahNumber: 56, profile: { name: "Al-Waqia", place: "Mecca", theme: "The Inevitable" }},
    "Al-Hadid": { verseCount: 29, surahNumber: 57, profile: { name: "Al-Hadid", place: "Medina", theme: "The Iron" }},
    "Al-Mujadila": { verseCount: 22, surahNumber: 58, profile: { name: "Al-Mujadila", place: "Medina", theme: "Justice in disputes, social etiquette, and warnings against secret plotting." }},
    "Al-Hashr": { verseCount: 24, surahNumber: 59, profile: { name: "Al-Hashr", place: "Medina", theme: "The Exile" }},
    "Al-Mumtahana": { verseCount: 13, surahNumber: 60, profile: { name: "Al-Mumtahana", place: "Medina", theme: "Loyalty in faith, treatment of non-hostile non-Muslims, and rules for migrant women."  }},
    "As-Saff": { verseCount: 14, surahNumber: 61, profile: { name: "As-Saff", place: "Medina", theme: "The Ranks" }},
    "Al-Jumu'a": { verseCount: 11, surahNumber: 62, profile: { name: "Al-Jumu'a", place: "Medina", theme: "The Congregation" }},
    "Al-Munafiqun": { verseCount: 11, surahNumber: 63, profile: { name: "Al-Munafiqun", place: "Medina", theme: "The Hypocrites" }},
    "At-Taghabun": { verseCount: 18, surahNumber: 64, profile: { name: "At-Taghabun", place: "Medina", theme: "Mutual Loss and Gain" }},
    "At-Talaq": { verseCount: 12, surahNumber: 65, profile: { name: "At-Talaq", place: "Medina", theme: "Divorce and Family Matters" }},
    "At-Tahrim": { verseCount: 12, surahNumber: 66, profile: { name: "At-Tahrim", place: "Medina", theme: "Prohibition and Repentance" }},
    "Al-Mulk": { verseCount: 30, surahNumber: 67, profile: { name: "Al-Mulk", place: "Mecca", theme: "The Sovereignty" }},
    "Al-Qalam": { verseCount: 52, surahNumber: 68, profile: { name: "Al-Qalam", place: "Mecca", theme: "The Pen" }},
    "Al-Haaqqa": { verseCount: 52, surahNumber: 69, profile: { name: "Al-Haaqqa", place: "Mecca", theme: "The Reality" }},
    "Al-Ma'arij": { verseCount: 44, surahNumber: 70, profile: { name: "Al-Ma'arij", place: "Mecca", theme: "The Ascending Stairways" }},
    "Nuh": { verseCount: 28, surahNumber: 71, profile: { name: "Nuh", place: "Mecca", theme: "The Prophet Noah" }},
    "Al-Jinn": { verseCount: 28, surahNumber: 72, profile: { name: "Al-Jinn", place: "Mecca", theme: "The Jinn" }},
    "Al-Muzzammil": { verseCount: 20, surahNumber: 73, profile: { name: "Al-Muzzammil", place: "Mecca", theme: "The Enshrouded One" }},
    "Al-Muddaththir": { verseCount: 56, surahNumber: 74, profile: { name: "Al-Muddaththir", place: "Mecca", theme: "The Cloaked One" }},
    "Al-Qiyama": { verseCount: 40, surahNumber: 75, profile: { name: "Al-Qiyama", place: "Mecca", theme: "The Resurrection" }},
    "Al-Insan": { verseCount: 31, surahNumber: 76, profile: { name: "Al-Insan", place: "Medina", theme: "Human creation, moral choice, and rewards for the righteous." }},
    // Add more Surahs as needed: "SurahName": { verseCount: X, surahNumber: Y }
};

const surahSelect = document.getElementById("surah-select");
const versesContainer = document.getElementById("verses-container");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const loadingDiv = document.getElementById("loading");

// Populate Surah dropdown
Object.keys(surahData).forEach(surah => {
    const option = document.createElement("option");
    option.value = surah;
    option.textContent = `${surah} (${surahData[surah].surahNumber})`;
    surahSelect.appendChild(option);
});


async function loadVerses(surah) { 
versesContainer.innerHTML = "";
loadingDiv.style.display = "block";
const { verseCount, surahNumber } = surahData[surah];
const savedData = JSON.parse(localStorage.getItem(`data_${surah}`)) || { verses: {} };
document.getElementById("last-updated").textContent = savedData.lastUpdated ? `Last updated: ${savedData.lastUpdated}` : "Last updated: Not saved yet";

try { // Fetch Arabic verses from the Quran API
    const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`);
    const data = await response.json();
    const arabicVerses = data.data.ayahs.map(ayah => ayah.text);

    let startIndex = 0; 
    if (surahNumber === 9) {
        // Skip Bismillah entirely for Surah 9 (At-Taubah)
        startIndex = 0; // No adjustment needed, but ensure no extra ayat is counted
    } else if (surahNumber !== 1) {
        // For other Surahs (e.g., Ibrahim), include Bismillah as a separate entry
            startIndex = 0; // Keep all ayats, handle Bismillah separately
        }
    const effectiveVerses = arabicVerses.slice(startIndex);

    for (let i = 1; i <= verseCount; i++) { 
        const verseData = savedData.verses[i] || {
            translation: "",
            actionItems: "",
            pictures: "",
            completed: "No",
            notes: ""
        };
        const arabicText = (i === 1 && surahNumber === 1) ? arabicVerses[0] : effectiveVerses[i - 1] || "Arabic text not available";
        const verseDiv = document.createElement("div"); 
        verseDiv.className = "verse-container";
        verseDiv.innerHTML = `
            <div class="verse-field"> 
                <label>Ayat Number:</label>
                <div>${i}</div>
            </div>
            <div class="verse-field">
                <label>Arabic Verse:</label>
                <div class="verse-text">${arabicText}</div>
            </div>
            <div class="verse-field">
                <label>Translation:</label>
                <textarea placeholder="Enter translation for verse ${i}" data-verse="${i}" data-field="translation">${verseData.translation}</textarea>
            </div>
            <div class="verse-field">
                <label>Key Takeaways:</label>
                <textarea placeholder="Enter key takeaways for verse ${i}" data-verse="${i}" data-field="keyTakeaways">${verseData.keyTakeaways || ""}</textarea>
            </div>
            <div class="verse-field">
                <label>Pictures and Other Resources:</label>
                <input type="text" placeholder="Enter picture name or URL for verse ${i}" data-verse="${i}" data-field="pictures" value="${verseData.pictures || ""}">
            </div>
            <div class="verse-field">
                <label>Extra Notes:</label>
                <textarea placeholder="Enter extra notes for verse ${i}" data-verse="${i}" data-field="notes">${verseData.notes || ""}</textarea>
            </div>
            <div class="verse-field">
                <label>Action Items:</label>
                <textarea placeholder="Enter action items for verse ${i}" data-verse="${i}" data-field="actionItems">${verseData.actionItems}</textarea>
            </div>
            <div class="verse-field">
                <label>Completed (Y/N):</label>
                <select data-verse="${i}" data-field="completed">
                    <option value="Yes" ${verseData.completed === "Yes" ? "selected" : ""}>Yes</option>
                    <option value="No" ${verseData.completed === "No" ? "selected" : ""}>No</option>
                </select>
            </div>
        `;
        versesContainer.appendChild(verseDiv);
    }

    document.querySelectorAll("textarea, input, select").forEach(element => { 
        element.addEventListener("input", updateProgress);
    });

    updateProgress();
    } catch (error) {
    console.error("Error fetching Arabic verses:", error);
    versesContainer.innerHTML = "<p>Error loading Arabic verses. Please try again later.</p>";
    } finally {
    loadingDiv.style.display = "none";
    }
}

function updateProgress() {
    const selectedSurah = surahSelect.value;
    if (!selectedSurah) {
        progressFill.style.width = "0%";
        progressText.textContent = "Progress: 0%";
        return;
    }

    const { verseCount } = surahData[selectedSurah];
    const selects = document.querySelectorAll("select[data-field='completed']");
    let completed = 0;

    selects.forEach(select => {
        if (select.value === "Yes") {
            completed++;
        }
    });

    const percentage = (completed / verseCount) * 100;
    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `Progress: ${percentage.toFixed(1)}%`;
}

function saveProgress() {
    const selectedSurah = surahSelect.value;
    if (!selectedSurah) return;

    const data = {};
    document.querySelectorAll(".verse-container").forEach(container => {
        const verse = container.querySelector("textarea[data-field='translation']").getAttribute("data-verse");
        data[verse] = {
            translation: container.querySelector("textarea[data-field='translation']").value,
            actionItems: container.querySelector("textarea[data-field='actionItems']").value,
            keyTakeaways: container.querySelector("textarea[data-field='keyTakeaways']").value,
            pictures: container.querySelector("input[data-field='pictures']").value,
            completed: container.querySelector("select[data-field='completed']").value,
            notes: container.querySelector("textarea[data-field='notes']").value
    };
    });
    
    const timestamp = new Date().toLocaleString();
localStorage.setItem(`data_${selectedSurah}`, JSON.stringify({ verses: data, lastUpdated: timestamp }));
document.getElementById("last-updated").textContent = `Last updated: ${timestamp}`;            
alert("Progress saved!");
}

function exportData() {
    const selectedSurah = surahSelect.value;
    if (!selectedSurah) {
        alert("Please select a Surah to export.");
        return;
    }
    const data = JSON.parse(localStorage.getItem(`data_${selectedSurah}`)) || {};
    if (!data.verses) {
        alert("No data to export for this Surah.");
        return;
    }
    let csv = "Ayat Number,Arabic Verse,Translation,Action Items,Pictures,Completed,Nota Tambahan\n";
    const { verseCount, surahNumber } = surahData[selectedSurah];
    for (let i = 1; i <= verseCount; i++) {
        const verseData = data.verses[i] || {};
        csv += `${i},${verseData.arabic || ""},"${verseData.translation || ""}","${verseData.actionItems || ""}","${verseData.pictures || ""}",${verseData.completed || "No"},"${verseData.notes || ""}"\n`;
    }
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedSurah}_data.csv`;
    a.click();
    URL.revokeObjectURL(url);
}

function importData() {
    const selectedSurah = surahSelect.value;
    if (!selectedSurah) {
        alert("Please select a Surah first.");
        return;
    }
    const fileInput = document.getElementById("import-file");
    const file = fileInput.files[0];
    if (!file) {
        alert("Please select a file to import.");
        return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            localStorage.setItem(`data_${selectedSurah}`, JSON.stringify(data));
            loadVerses(selectedSurah);
            alert("Data imported successfully!");
        } catch (error) {
            alert("Error importing data. Please ensure it’s a valid JSON file.");
        }
    };
    reader.readAsText(file);
}

function clearData() {
    const selectedSurah = surahSelect.value;
    if (!selectedSurah) {
        alert("Please select a Surah to clear.");
        return;
    }
    if (confirm(`Are you sure you want to clear all data for ${selectedSurah}?`)) {
        localStorage.removeItem(`data_${selectedSurah}`);
        loadVerses(selectedSurah);
        alert("Data cleared!");
    }
}

function updateDashboard() {
    const selectedSurah = surahSelect.value;

    // Calculate global totals across all Surahs
    let totalAyat = 0;
    let totalAyatCompleted = 0;
    Object.keys(surahData).forEach(surah => {
        const data = JSON.parse(localStorage.getItem(`data_${surah}`)) || { verses: {} };
        const verseCount = surahData[surah].verseCount;
        const completed = Object.values(data.verses || {}).filter(v => v.completed === "Yes").length;
        totalAyat += verseCount;
        totalAyatCompleted += completed;
    });

    const totalSurahs = Object.keys(surahData).length;
    const completedSurahs = Object.keys(surahData).filter(surah => {
        const data = JSON.parse(localStorage.getItem(`data_${surah}`)) || { verses: {} };
        const verseCount = surahData[surah].verseCount;
        const completed = Object.values(data.verses || {}).filter(v => v.completed === "Yes").length;
        return completed === verseCount;
    }).length;

    // Update dashboard with global totals by default
    document.getElementById("total-ayat").querySelector("span").textContent = totalAyat;
    document.getElementById("completed-ayat").querySelector("span").textContent = totalAyatCompleted;
    document.getElementById("total-surahs").querySelector("span").textContent = totalSurahs;
    document.getElementById("completed-surahs").querySelector("span").textContent = completedSurahs;

    // If a Surah is selected, override Ayat stats with selected Surah data
    if (selectedSurah) {
        const { verseCount } = surahData[selectedSurah];
        const data = JSON.parse(localStorage.getItem(`data_${selectedSurah}`)) || { verses: {} };
        const completedAyat = Object.values(data.verses || {}).filter(v => v.completed === "Yes").length;
        document.getElementById("total-ayat").querySelector("span").textContent = verseCount;
        document.getElementById("completed-ayat").querySelector("span").textContent = completedAyat;
    }
}

// Load saved Surah selection
const lastSurah = localStorage.getItem("lastSurah");
if (lastSurah && surahData[lastSurah]) {
    surahSelect.value = lastSurah;
    loadVerses(lastSurah);
}

// Enhanced event listener for Surah selection
surahSelect.addEventListener("change", () => {
    const selectedSurah = surahSelect.value;
    if (selectedSurah) {
        loadVerses(selectedSurah);
        const profile = surahData[selectedSurah].profile;
        const profileDiv = document.getElementById("surah-profile");
        if (profile) {
            document.getElementById("profile-name").textContent = profile.name;
            document.getElementById("profile-place").textContent = profile.place;
            document.getElementById("profile-theme").textContent = profile.theme;
            profileDiv.style.display = "block";
        } else {
            profileDiv.style.display = "none";
        }
        localStorage.setItem("lastSurah", selectedSurah);
    } else {
        versesContainer.innerHTML = "";
        document.getElementById("surah-profile").style.display = "none";
        updateProgress();
    }
    updateDashboard(); // Update dashboard on Surah change
});

// Initial dashboard update
updateDashboard();