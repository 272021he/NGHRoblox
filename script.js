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
        platforms: ["Android", "Windows"],
        desc_vi: "Executor nổi tiếng hàng đầu cho Android & Windows, hỗ trợ chạy 99% các loại Script Hub nặng mượt mà.",
        desc_en: "Top-tier executor for Android & Windows, running 99% of heavy Script Hubs smoothly.",
        downloadUrl: "https://delta-executor.com",
        getKeyUrl: "https://delta-executor.com/getkey"
    },
    {
        id: "hydrogen",
        title: "Hydrogen Executor",
        icon: "fa-atom",
        iconColor: "purple",
        status: "working",
        platforms: ["Android", "macOS"],
        desc_vi: "Giao diện siêu đẹp, tối ưu hóa cực tốt cho hệ điều hành Android và Mac. Khả năng tương thích script cao.",
        desc_en: "Sleek UI, highly optimized for Android and Mac OS with high script execution compatibility.",
        downloadUrl: "https://hydrogen.sh",
        getKeyUrl: "https://hydrogen.sh/getkey"
    },
    {
        id: "codex",
        title: "CodeX Executor",
        icon: "fa-code",
        iconColor: "cyan",
        status: "working",
        platforms: ["Android", "iOS"],
        desc_vi: "Executor số 1 cho các thiết bị di động iOS & Android. Tốc độ thực thi cực nhanh, key bypass đơn giản.",
        desc_en: "#1 Executor for iOS & Android mobile devices. Lightning fast execution and easy key bypass.",
        downloadUrl: "https://codex.lol",
        getKeyUrl: "https://codex.lol/getkey"
    },
    {
        id: "wave",
        title: "Wave Executor",
        icon: "fa-wave-square",
        iconColor: "green",
        status: "updating",
        platforms: ["Windows"],
        desc_vi: "Phần mềm Executor chuyên biệt trên Windows PC với Anticheat Bypass cực xịn và giao diện hiện đại.",
        desc_en: "Specialized Windows PC Executor featuring advanced Anticheat Bypass and modern design.",
        downloadUrl: "https://getwave.gg",
        getKeyUrl: "https://getwave.gg/key"
    },
    {
        id: "arceus",
        title: "Arceus X Neo",
        icon: "fa-shield-cat",
        iconColor: "purple",
        status: "patched",
        platforms: ["Android"],
        desc_vi: "Phiên bản Neo mới nhất của Arceus X huyền thoại. Hiện đang bảo trì để cập nhật theo Roblox v2.600+.",
        desc_en: "Latest Neo edition of the legendary Arceus X. Currently updating for Roblox v2.600+.",
        downloadUrl: "#",
        getKeyUrl: "#"
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
        roblox_update_label: "Thông Tin Cập Nhật Roblox VNG (com.vng.roblox)",
        roblox_tab_title: "Chi Tiết Bản Cập Nhật Roblox VNG Mobile (com.vng.roblox)",
        roblox_tab_desc: "Dữ liệu phiên bản mới nhất tự động đồng bộ từ Google Play Store và trạng thái Anticheat.",
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
        roblox_update_label: "Roblox VNG Update Info (com.vng.roblox)",
        roblox_tab_title: "Roblox VNG Mobile Update Details (com.vng.roblox)",
        roblox_tab_desc: "Latest version data automatically synchronized from Google Play Store & Anticheat status.",
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
// ROBLOX OFFICIAL API LIVE VERSION FETCH (via CORS Proxy)
// --------------------------------------------------------------------------

async function fetchRobloxVersion() {
    const changelogEl = document.getElementById("roblox-changelog");
    const tabChangelogEl = document.getElementById("tab-roblox-changelog");

    try {
        const res = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://clientsettings.roblox.com/v2/client-version/AndroidApp'));
        const data = await res.json();
        const parsed = JSON.parse(data.contents);
        
        if (parsed && parsed.clientVersionUpload) {
            const ver = 'v' + parsed.clientVersionUpload;
            document.querySelectorAll('#roblox-version, #tab-roblox-version, .version-tag, .tag-val').forEach(el => {
                if (el) el.innerText = ver;
            });
        }
    } catch (e) {
        console.error('Lỗi fetch phiên bản Roblox API:', e);
    }

    const defaultNotes_vi = "• Phiên bản mới nhất được đồng bộ trực tiếp từ hệ thống API Roblox chính thức (AndroidApp).\n• Tối ưu hiệu năng, tương thích hoàn toàn hệ thống Anticheat Byfron & các phầm mềm Executor.\n• Sửa lỗi kết nối server và tăng tốc trải nghiệm đăng nhập.";
    const defaultNotes_en = "• Latest build synchronized live from official Roblox ClientSettings API (AndroidApp).\n• Performance optimized, full compatibility with Byfron Anticheat & modern Executors.\n• Bug fixes and login stability improvements.";

    const notes = currentLang === 'vi' ? defaultNotes_vi : defaultNotes_en;
    if (changelogEl) changelogEl.innerHTML = notes.replace(/\n/g, '<br>');
    if (tabChangelogEl) tabChangelogEl.innerHTML = notes.replace(/\n/g, '<br>');
}

function fetchRobloxUpdateInfo() {
    fetchRobloxVersion();
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
                    ${item.getKeyUrl !== '#' ? `
                        <a href="${item.getKeyUrl}" target="_blank" class="btn btn-secondary btn-icon-only" title="${langObj.btn_getkey}">
                            <i class="fa-solid fa-key"></i>
                        </a>
                    ` : ''}
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
