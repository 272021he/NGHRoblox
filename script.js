/* ==========================================================================
   NEXGEN BIO & SCRIPT HUB - INTERACTIVE JAVASCRIPT LOGIC
   ========================================================================== */

// --------------------------------------------------------------------------
// DATA SOURCES: EXECUTORS & SCRIPTS
// --------------------------------------------------------------------------

const executorsData = [
    {
        id: "delta",
        title: "Delta Executor",
        icon: "fa-bolt",
        iconColor: "cyan",
        status: "working", // working | patched | updating
        platforms: ["Android"],
        desc_vi: "Executor nổi tiếng hàng đầu cho Android, hỗ trợ chạy 99% các loại Script Hub nặng mượt mà.",
        desc_en: "Top-tier executor for Android, running 99% of heavy Script Hubs smoothly.",
        downloadUrl: "https://loot-link.com/s?sI4Sq84q",
    },
    {
        id: "arceus",
        title: "Arceus X Neo",
        icon: "fa-shield-cat",
        iconColor: "purple",
        status: "working",
        platforms: ["Android"],
        desc_vi: "Phiên bản Neo mới nhất của Arceus X huyền thoại cho Android. Đang hoạt động mượt mà và ổn định.",
        desc_en: "Latest Neo edition of the legendary Arceus X for Android. Fully working and operational.",
        downloadUrl: "https://lootdest.org/s?tYfR6WXY",
    }
];

const scriptsData = [
    {
        id: "blox-fruits-redz",
        title: "Redz Hub Auto Farm",
        game: "Blox Fruits",
        isKeyless: true,
        desc_vi: "Script Blox Fruits mượt nhất hiện tại: Auto Farm Level, Auto Sea Events, Auto Raid & Mastery 600.",
        desc_en: "Smooth Blox Fruits script: Auto Farm Level, Auto Sea Events, Auto Raid & Mastery 600.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/redz-999/BloxFruits/main/RedzHub.lua"))()`
    },
    {
        id: "blox-fruits-hoho",
        title: "Hoho Hub V3",
        game: "Blox Fruits",
        isKeyless: false,
        desc_vi: "Hub đa năng nổi tiếng với giao diện tiếng Việt dễ dùng, Auto Race V4, Auto Mirage & Teleport đảo.",
        desc_en: "Popular multi-feature hub with Race V4 auto, Mirage Island tracker and fast Teleport.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/acsu123/HOHO_HUB/main/Loading_v3.lua"))()`
    },
    {
        id: "king-legacy-void",
        title: "Void Hub King Legacy",
        game: "King Legacy",
        isKeyless: true,
        desc_vi: "Auto Farm Level, Auto Dungeon, Kill Aura Boss, Auto Stats & Sea King Tracker hoàn toàn miễn phí.",
        desc_en: "Auto Farm Level, Auto Dungeon, Kill Aura Boss & Sea King Tracker. Completely free.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/voidhub/kinglegacy/main/source.lua"))()`
    },
    {
        id: "blade-ball-parry",
        title: "Auto Parry God Hub",
        game: "Blade Ball",
        isKeyless: true,
        desc_vi: "Tự động đỡ bóng (Auto Parry) căn thời gian siêu mượt, Auto Win Spammer & Spam Ability.",
        desc_en: "Ultra smooth Auto Parry timing, Auto Win Spammer & Ability Spammer for Blade Ball.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/godhub/bladeball/main/parry.lua"))()`
    },
    {
        id: "universal-iy",
        title: "Infinite Yield Admin",
        game: "Universal",
        isKeyless: true,
        desc_vi: "Bảng lệnh Admin huyền thoại tương thích với 100% tất cả các tựa game trên Roblox (Fly, Speed, ESP, Noclip).",
        desc_en: "Legendary Admin Command Script compatible with 100% of all Roblox games (Fly, Speed, ESP, Noclip).",
        code: `loadstring(game:HttpGet('https://raw.githubusercontent.com/EdgeIY/infiniteyield/master/source'))()`
    },
    {
        id: "universal-dex",
        title: "Dark Dex V4 Explorer",
        game: "Universal",
        isKeyless: true,
        desc_vi: "Công cụ soi cấu trúc Workspace và Game Data dành cho các bạn muốn học Lập trình Script Roblox.",
        desc_en: "Game Explorer tool to view Workspace and Game Data structures for Roblox Script Developers.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/infyiff/backup/main/dex.lua"))()`
    }
];

// --------------------------------------------------------------------------
// I18N / MULTI-LANGUAGE DICTIONARY
// --------------------------------------------------------------------------

const translations = {
    vi: {
        sys_online: "Hệ thống: Hoạt động",
        user_bio: "👋 Chào mừng bạn đến với trang cá nhân của tôi! Chia sẻ các Executors mượt mà, Script Roblox chất lượng cao & công cụ miễn phí.",
        stat_executors: "Executors",
        stat_scripts: "Scripts",
        tab_executors: "Executors",
        tab_scripts: "Scripts Hub",
        tab_roblox_update: "Cập Nhật Roblox",
        tab_links: "Liên Kết Khác",
        roblox_update_label: "Thông Tin Cập Nhật Roblox Quốc Tế",
        roblox_tab_title: "Chi Tiết Bản Cập Nhật Roblox Quốc Tế",
        roblox_tab_desc: "Dữ liệu phiên bản mới nhất tự động đồng bộ từ Store chính thức và trạng thái Anticheat.",
        recent_changes_heading: "Có gì mới trong bản cập nhật (Recent Changes):",
        executors_title: "Danh Sách Executors Khuyên Dùng",
        executors_desc: "Các phần mềm Executor Roblox an toàn, mượt mà và cập nhật thường xuyên nhất.",
        scripts_title: "Thư Viện Script Roblox",
        scripts_desc: "Tổng hợp Script Auto Farm, Keyless, Hub vip tối ưu nhất.",
        search_placeholder: "Tìm kiếm script hoặc tên game...",
        filter_all: "Tất cả Game",
        links_title: "Liên Kết & Thông Tin Khác",
        links_desc: "Các trang dự phòng, donate và cộng đồng chính thức.",
        donate_title: "Ủng Hộ / Donate (PlayerDuo / MoMo)",
        donate_desc: "Hỗ trợ kinh phí duy trì hosting và cập nhật script mới.",
        community_title: "Cộng Đồng Roblox Việt Nam",
        community_desc: "Nơi trao đổi, trợ giúp lỗi executor và nhận script miễn phí.",
        status_page_title: "Trang Kiểm Tra Trạng Thái Bypass",
        status_page_desc: "Xem chi tiết trạng thái Bypass Byfron & Anticheat thời gian thực.",
        btn_download: "Tải Về",
        btn_getkey: "Lấy Key",
        btn_copy: "Sao chép Script",
        btn_view_code: "Xem Code",
        badge_working: "Đang Hoạt Động",
        badge_patched: "Bị Patched",
        badge_updating: "Đang Cập Nhật",
        badge_keyless: "Keyless",
        badge_key: "Cần Key",
        toast_copied: "Đã sao chép Script vào Clipboard!",
        no_results: "Không tìm thấy script nào phù hợp với từ khóa của bạn."
    },
    en: {
        sys_online: "System: Operational",
        user_bio: "👋 Welcome to my personal bio site! Sharing smooth Executors, high quality Roblox Scripts & free utilities.",
        stat_scripts: "Scripts",
        stat_uptime: "Uptime",
        stat_downloads: "Uses",
        tab_executors: "Executors",
        tab_scripts: "Scripts Hub",
        tab_roblox_update: "Roblox Update",
        tab_links: "Other Links",
        roblox_update_label: "Global Roblox Update Info",
        roblox_tab_title: "Global Roblox Mobile Update Details",
        roblox_tab_desc: "Latest version data automatically synchronized from Official Store & Anticheat status.",
        recent_changes_heading: "What's new in this release (Recent Changes):",
        executors_title: "Recommended Executors",
        executors_desc: "Safe, smooth, and frequently updated Roblox Executor software.",
        scripts_title: "Roblox Script Library",
        scripts_desc: "Collection of Auto Farm, Keyless, and premium optimized Script Hubs.",
        search_placeholder: "Search scripts or game titles...",
        filter_all: "All Games",
        links_title: "Links & Resources",
        links_desc: "Backup channels, donation options, and official communities.",
        donate_title: "Support / Donate (PayPal / Crypto)",
        donate_desc: "Help support server hosting costs and new script releases.",
        community_title: "Official Discord Community",
        community_desc: "Connect, get executor support, and request custom scripts.",
        status_page_title: "Anticheat Status Checker",
        status_page_desc: "Real-time updates on Byfron & Anticheat bypass status.",
        btn_download: "Download",
        btn_getkey: "Get Key",
        btn_copy: "Copy Script",
        btn_view_code: "View Code",
        badge_working: "Working",
        badge_patched: "Patched",
        badge_updating: "Updating",
        badge_keyless: "Keyless",
        badge_key: "Requires Key",
        toast_copied: "Script copied to clipboard!",
        no_results: "No scripts found matching your search query."
    }
};

let currentLang = "vi";
let currentFilter = "all";
let searchQuery = "";

// --------------------------------------------------------------------------
// APPLICATION INITIALIZATION & DOM EVENTS
// --------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    setupTabSwitching();
    setupLanguageSwitcher();
    setupSearchAndFilter();
    setupModalEvents();
    renderExecutors();
    renderScripts();
    updateBadgesCount();
    fetchRobloxUpdateInfo();
}

// --------------------------------------------------------------------------
// HELPER: EXACT LOCAL DATE DAYS AGO CALCULATOR
// --------------------------------------------------------------------------

function getDaysAgo(dateString) {
    if (!dateString) return currentLang === 'en' ? "Updated recently" : "Cập nhật gần đây";
    const releaseDate = new Date(dateString);
    const now = new Date();
    
    // Đưa cả 2 về mốc 0h00 phút cùng ngày theo giờ địa phương để so sánh chính xác số ngày
    const releaseZero = new Date(releaseDate.getFullYear(), releaseDate.getMonth(), releaseDate.getDate());
    const nowZero = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    const diffTime = Math.abs(nowZero - releaseZero);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return currentLang === 'en' ? "Updated today" : "Mới cập nhật hôm nay";
    return currentLang === 'en' ? `Updated ${diffDays} days ago` : `Cập nhật ${diffDays} ngày trước`;
}

function getDiffDaysCount(dateString) {
    if (!dateString) return 0;
    const releaseDate = new Date(dateString);
    const now = new Date();
    const releaseZero = new Date(releaseDate.getFullYear(), releaseDate.getMonth(), releaseDate.getDate());
    const nowZero = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.floor(Math.abs(nowZero - releaseZero) / (1000 * 60 * 60 * 24));
}

// --------------------------------------------------------------------------
// HYBRID ROBLOX VERSION CHECKER: Android ClientSettings API + iOS Release Date
// --------------------------------------------------------------------------

async function fetchRobloxHybridVersion() {
    const ONE_HOUR = 3600 * 1000;

    let androidVersionStr = "v2.734";
    let releaseDateStr = "";
    let releaseNotes = "";

    // 1. Fetch exact Android version string from clientsettings.roblox.com via corsproxy.io
    try {
        const androidApiUrl = 'https://corsproxy.io/?https://clientsettings.roblox.com/v2/client-version/AndroidApp';
        const resAndroid = await fetch(androidApiUrl);
        if (resAndroid.ok) {
            const dataAndroid = await resAndroid.json();
            if (dataAndroid && (dataAndroid.clientVersionUpload || dataAndroid.version)) {
                const rawVer = dataAndroid.clientVersionUpload || dataAndroid.version;
                // Parse major/minor e.g. 2.734.665.123 -> v2.734
                const parts = rawVer.split('.');
                if (parts.length >= 2) {
                    androidVersionStr = `v${parts[0]}.${parts[1]}`;
                } else {
                    androidVersionStr = rawVer.startsWith('v') ? rawVer : 'v' + rawVer;
                }
            }
        }
    } catch (e) {
        console.warn("Lỗi fetch Roblox Android ClientSettings API:", e);
    }

    // 2. Fetch Release Date & Notes from iTunes API
    try {
        const iosApiUrl = 'https://itunes.apple.com/lookup?id=431946152&country=vn';
        const resIos = await fetch(iosApiUrl);
        if (resIos.ok) {
            const dataIos = await resIos.json();
            if (dataIos && dataIos.results && dataIos.results.length > 0) {
                const item = dataIos.results[0];
                releaseDateStr = item.currentVersionReleaseDate || "";
                releaseNotes = item.releaseNotes || "";
            }
        }
    } catch (e) {
        console.warn("Lỗi fetch iTunes Release Date:", e);
    }

    // 3. Save to localStorage
    localStorage.setItem("rbx_android_ver", androidVersionStr);
    localStorage.setItem("rbx_release_date", releaseDateStr);
    localStorage.setItem("rbx_release_notes", releaseNotes);

    // 4. Update UI with Android version priority & getDaysAgo date text
    updateRobloxHybridUI(androidVersionStr, releaseDateStr, releaseNotes);

    const diffDays = getDiffDaysCount(releaseDateStr);

    // Setup 1-hour polling interval if diffDays >= 7
    if (diffDays >= 7 && !window.rbxHybridPollingTimer) {
        window.rbxHybridPollingTimer = setInterval(() => {
            fetchRobloxHybridVersion();
        }, ONE_HOUR);
    } else if (diffDays < 7 && window.rbxHybridPollingTimer) {
        clearInterval(window.rbxHybridPollingTimer);
        window.rbxHybridPollingTimer = null;
    }
}

function updateRobloxHybridUI(versionStr, releaseDateStr, releaseNotes) {
    if (!versionStr) versionStr = "v2.734";

    const daysAgoText = getDaysAgo(releaseDateStr);
    const fullDisplayText = `${versionStr} - ${daysAgoText}`;

    document.querySelectorAll('#roblox-version, #tab-roblox-version, .version-tag, .tag-val').forEach(el => {
        if (el) el.innerText = fullDisplayText;
    });

    const changelogEl = document.getElementById("roblox-changelog");
    const tabChangelogEl = document.getElementById("tab-roblox-changelog");

    let finalNotes = releaseNotes ? releaseNotes : (currentLang === 'vi' ? 
        "• Tối ưu hóa hiệu năng và sửa lỗi trải nghiệm người dùng.\n• Tương thích Anticheat Byfron & hỗ trợ đầy đủ các bản Executor." : 
        "• Bug fixes and speed improvements for reliability.\n• Enhanced anticheat stability and graphics performance.");

    if (changelogEl) changelogEl.innerHTML = finalNotes.replace(/\n/g, '<br>');
    if (tabChangelogEl) tabChangelogEl.innerHTML = finalNotes.replace(/\n/g, '<br>');
}

function fetchRobloxUpdateInfo() {
    fetchRobloxHybridVersion();
}

// --------------------------------------------------------------------------
// RENDER EXECUTORS CARDS
// --------------------------------------------------------------------------

function renderExecutors() {
    const container = document.getElementById("executors-list");
    if (!container) return;

    const langObj = translations[currentLang];

    container.innerHTML = executorsData.map(item => {
        const desc = currentLang === "vi" ? item.desc_vi : item.desc_en;
        const statusText = langObj[`badge_${item.status}`] || item.status;
        const iconColorClass = item.iconColor || "cyan";

        const platformBadges = item.platforms.map(p => `<span class="badge platform"><i class="fa-brands fa-${p.toLowerCase() === 'windows' ? 'windows' : p.toLowerCase() === 'android' ? 'android' : 'apple'}"></i> ${p}</span>`).join("");

        return `
            <div class="card-item">
                <div class="card-top">
                    <div class="card-icon ${iconColorClass}">
                        <i class="fa-solid ${item.icon}"></i>
                    </div>
                    <div class="card-badges">
                        <span class="badge ${item.status}">${statusText}</span>
                        ${platformBadges}
                    </div>
                </div>
                <div class="card-content">
                    <h3>${item.title}</h3>
                    <p>${desc}</p>
                </div>
                <div class="card-actions">
                    <a href="${item.downloadUrl}" target="_blank" class="btn btn-primary">
                        <i class="fa-solid fa-download"></i>
                        <span>${langObj.btn_download}</span>
                    </a>
                </div>
            </div>
        `;
    }).join("");
}

// --------------------------------------------------------------------------
// RENDER SCRIPTS CARDS
// --------------------------------------------------------------------------

function renderScripts() {
    const container = document.getElementById("scripts-list");
    if (!container) return;

    const langObj = translations[currentLang];

    // Filter logic
    const filtered = scriptsData.filter(item => {
        const matchesFilter = currentFilter === "all" || item.game === currentFilter;
        const q = searchQuery.toLowerCase();
        const matchesSearch = item.title.toLowerCase().includes(q) || 
                              item.game.toLowerCase().includes(q) || 
                              (item.desc_vi && item.desc_vi.toLowerCase().includes(q)) || 
                              (item.desc_en && item.desc_en.toLowerCase().includes(q));
        return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; color: var(--text-secondary);">
                <i class="fa-solid fa-ghost" style="font-size: 2.5rem; margin-bottom: 12px; color: var(--cyan-glow);"></i>
                <p>${langObj.no_results}</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(item => {
        const desc = currentLang === "vi" ? item.desc_vi : item.desc_en;
        const keyBadgeText = item.isKeyless ? langObj.badge_keyless : langObj.badge_key;
        const keyBadgeClass = item.isKeyless ? "working" : "updating";

        return `
            <div class="card-item">
                <div class="card-top">
                    <div class="card-icon purple">
                        <i class="fa-solid fa-scroll"></i>
                    </div>
                    <div class="card-badges">
                        <span class="badge ${keyBadgeClass}">${keyBadgeText}</span>
                    </div>
                </div>
                <div class="card-content">
                    <div class="game-title"><i class="fa-solid fa-gamepad"></i> ${item.game}</div>
                    <h3>${item.title}</h3>
                    <p>${desc}</p>
                </div>
                <div class="card-actions">
                    <button class="btn btn-primary" onclick="copyScriptCode('${item.id}')">
                        <i class="fa-regular fa-copy"></i>
                        <span>${langObj.btn_copy}</span>
                    </button>
                    <button class="btn btn-secondary btn-icon-only" onclick="openScriptModal('${item.id}')" title="${langObj.btn_view_code}">
                        <i class="fa-solid fa-code"></i>
                    </button>
                </div>
            </div>
        `;
    }).join("");
}

// --------------------------------------------------------------------------
// TAB SWITCHING LOGIC
// --------------------------------------------------------------------------

function setupTabSwitching() {
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const tabTarget = btn.getAttribute("data-tab");

            tabBtns.forEach(b => b.classList.remove("active"));
            tabPanes.forEach(p => p.classList.remove("active"));

            btn.classList.add("active");
            const targetPane = document.getElementById(`tab-${tabTarget}`);
            if (targetPane) targetPane.classList.add("active");
        });
    });
}

function updateBadgesCount() {
    const execBadge = document.getElementById("executors-count");
    const scriptBadge = document.getElementById("scripts-count");
    const statExecVal = document.getElementById("stat-executors-val");
    const statScriptVal = document.getElementById("stat-scripts-val");

    if (execBadge) execBadge.textContent = executorsData.length;
    if (scriptBadge) scriptBadge.textContent = scriptsData.length;
    if (statExecVal) statExecVal.textContent = executorsData.length;
    if (statScriptVal) statScriptVal.textContent = scriptsData.length;
}

// --------------------------------------------------------------------------
// SEARCH & CATEGORY FILTERING LOGIC
// --------------------------------------------------------------------------

function setupSearchAndFilter() {
    const searchInput = document.getElementById("script-search-input");
    const clearBtn = document.getElementById("clear-search-btn");
    const chipBtns = document.querySelectorAll("#game-filters .chip");

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.trim();
            if (clearBtn) clearBtn.style.display = searchQuery.length > 0 ? "block" : "none";
            renderScripts();
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            if (searchInput) searchInput.value = "";
            searchQuery = "";
            clearBtn.style.display = "none";
            renderScripts();
        });
    }

    chipBtns.forEach(chip => {
        chip.addEventListener("click", () => {
            chipBtns.forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            currentFilter = chip.getAttribute("data-filter");
            renderScripts();
        });
    });
}

// --------------------------------------------------------------------------
// COPY TO CLIPBOARD & TOAST NOTIFICATION
// --------------------------------------------------------------------------

function copyScriptCode(scriptId) {
    const item = scriptsData.find(s => s.id === scriptId);
    if (!item) return;

    navigator.clipboard.writeText(item.code).then(() => {
        showToast(translations[currentLang].toast_copied);
    }).catch(err => {
        console.error("Failed to copy code: ", err);
    });
}

function showToast(message) {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = "toastOut 0.3s ease-out forwards";
        setTimeout(() => toast.remove(), 300);
    }, 2600);
}

// --------------------------------------------------------------------------
// MODAL CODE VIEWER LOGIC
// --------------------------------------------------------------------------

let currentModalScript = null;

function openScriptModal(scriptId) {
    const item = scriptsData.find(s => s.id === scriptId);
    if (!item) return;

    currentModalScript = item;
    const modal = document.getElementById("script-modal");
    const title = document.getElementById("modal-script-title");
    const code = document.getElementById("modal-code-content");

    if (title) title.textContent = `${item.game} - ${item.title}`;
    if (code) code.textContent = item.code;

    if (modal) modal.style.display = "flex";
}

function setupModalEvents() {
    const modal = document.getElementById("script-modal");
    const closeBtn = document.getElementById("modal-close");
    const copyBtn = document.getElementById("modal-copy-btn");

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            if (modal) modal.style.display = "none";
        });
    }

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) modal.style.display = "none";
        });
    }

    if (copyBtn) {
        copyBtn.addEventListener("click", () => {
            if (currentModalScript) {
                copyScriptCode(currentModalScript.id);
            }
        });
    }
}

// --------------------------------------------------------------------------
// I18N / LANGUAGE SWITCHER LOGIC
// --------------------------------------------------------------------------

function setupLanguageSwitcher() {
    const langBtn = document.getElementById("lang-btn");
    const langSwitcher = document.querySelector(".lang-switcher");
    const langOptions = document.querySelectorAll(".lang-option");
    const currentLangText = document.getElementById("current-lang-text");

    if (langBtn && langSwitcher) {
        langBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            langSwitcher.classList.toggle("open");
        });

        document.addEventListener("click", () => {
            langSwitcher.classList.remove("open");
        });
    }

    langOptions.forEach(opt => {
        opt.addEventListener("click", () => {
            const lang = opt.getAttribute("data-lang");
            if (lang && lang !== currentLang) {
                currentLang = lang;
                langOptions.forEach(o => o.classList.remove("active"));
                opt.classList.add("active");

                if (currentLangText) {
                    currentLangText.textContent = lang === "vi" ? "VIE (VN)" : "ENG (US)";
                }

                updatePageLanguage();
            }
            if (langSwitcher) langSwitcher.classList.remove("open");
        });
    });
}

function updatePageLanguage() {
    const langObj = translations[currentLang];
    if (!langObj) return;

    // Update text elements
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (langObj[key]) el.textContent = langObj[key];
    });

    // Update placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (langObj[key]) el.placeholder = langObj[key];
    });

    // Re-render dynamic cards
    renderExecutors();
    renderScripts();
}
