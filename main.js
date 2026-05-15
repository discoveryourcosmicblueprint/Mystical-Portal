// ================================
// MYSTICAL PORTAL - MAIN JAVASCRIPT
// ================================

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize all components
    initNavigation();
    initParticles();
    initNumerology();
    initDestinyMatrix();
    initChakras();
    initAstrology();
    initCompatibility();
    initReviews();
    initScrollEffects();
    initTabs();
}

// ================================
// NAVIGATION
// ================================

function initNavigation() {
    const nav = document.getElementById('mainNav');
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile menu
    mobileBtn?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileBtn.classList.toggle('active');
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                navLinks.classList.remove('active');
            }
        });
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ================================
// PARTICLES
// ================================

function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(212, 175, 55, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;
        container.appendChild(particle);
    }

    // Add float animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
            25% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
            50% { transform: translateY(-10px) translateX(-10px); opacity: 0.5; }
            75% { transform: translateY(-30px) translateX(5px); opacity: 0.7; }
        }
    `;
    document.head.appendChild(style);
}

// ================================
// NUMEROLOGY CALCULATIONS
// ================================

function initNumerology() {
    const form = document.getElementById('numerologyForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showLoading();
        
        setTimeout(() => {
            calculateNumerology();
            hideLoading();
        }, 1500);
    });
}

function calculateNumerology() {
    const fullName = document.getElementById('fullName').value.toUpperCase();
    const birthDate = document.getElementById('birthDate').value;
    
    if (!fullName || !birthDate) return;

    const dateObj = new Date(birthDate);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();

    // Calculate all numbers
    const lifePathNumber = calculateLifePath(day, month, year);
    const destinyNumber = calculateDestiny(fullName);
    const soulUrgeNumber = calculateSoulUrge(fullName);
    const personalityNumber = calculatePersonality(fullName);
    const birthdayNumber = day > 31 ? reduceNumber(day) : day;
    const personalYear = calculatePersonalYear(day, month);

    // Display results
    displayNumerologyResults({
        lifePath: lifePathNumber,
        destiny: destinyNumber,
        soulUrge: soulUrgeNumber,
        personality: personalityNumber,
        birthday: birthdayNumber,
        personalYear: personalYear
    });

    // Show results
    document.getElementById('numerologyResults').classList.remove('hidden');
}

function calculateLifePath(day, month, year) {
    // First reduce each component
    let dayNum = reduceNumber(day);
    let monthNum = reduceNumber(month);
    let yearNum = reduceNumber(year);
    
    // Check for master numbers in the sum
    let total = dayNum + monthNum + yearNum;
    
    // If total is a master number, keep it
    if (total === 11 || total === 22 || total === 33) {
        return total;
    }
    
    return reduceNumber(total);
}

function calculateDestiny(name) {
    let total = 0;
    const cleanName = name.replace(/[^A-Z]/g, '');
    
    for (let char of cleanName) {
        total += NumerologyData.letterValues[char] || 0;
    }
    
    // Check for master number before final reduction
    if (total === 11 || total === 22 || total === 33) {
        return total;
    }
    
    return reduceToSingleOrMaster(total);
}

function calculateSoulUrge(name) {
    let total = 0;
    const cleanName = name.replace(/[^A-Z]/g, '');
    
    for (let char of cleanName) {
        if (NumerologyData.vowels.includes(char)) {
            total += NumerologyData.letterValues[char] || 0;
        }
    }
    
    return reduceToSingleOrMaster(total);
}

function calculatePersonality(name) {
    let total = 0;
    const cleanName = name.replace(/[^A-Z]/g, '');
    
    for (let char of cleanName) {
        if (!NumerologyData.vowels.includes(char)) {
            total += NumerologyData.letterValues[char] || 0;
        }
    }
    
    return reduceToSingleOrMaster(total);
}

function calculatePersonalYear(day, month) {
    const currentYear = new Date().getFullYear();
    let total = reduceNumber(day) + reduceNumber(month) + reduceNumber(currentYear);
    return reduceToSingleOrMaster(total);
}

function reduceNumber(num) {
    while (num > 9) {
        num = String(num).split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }
    return num;
}

function reduceToSingleOrMaster(num) {
    while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
        num = String(num).split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }
    return num;
}

function displayNumerologyResults(numbers) {
    // Life Path
    const lifePathData = NumerologyData.lifePathReadings[numbers.lifePath];
    document.getElementById('lifePathNumber').textContent = numbers.lifePath;
    document.getElementById('lifePathKeyword').textContent = lifePathData?.keyword || '';
    document.getElementById('lifePathDescription').innerHTML = lifePathData?.shortDescription || '';
    document.getElementById('lifePathExpanded').innerHTML = lifePathData?.fullReading || '';

    // Destiny
    const destinyData = NumerologyData.destinyReadings[numbers.destiny];
    document.getElementById('destinyNumber').textContent = numbers.destiny;
    document.getElementById('destinyKeyword').textContent = destinyData?.keyword || '';
    document.getElementById('destinyDescription').innerHTML = destinyData?.shortDescription || '';

    // Soul Urge
    const soulUrgeData = NumerologyData.soulUrgeReadings[numbers.soulUrge];
    document.getElementById('soulUrgeNumber').textContent = numbers.soulUrge;
    document.getElementById('soulUrgeKeyword').textContent = soulUrgeData?.keyword || '';
    document.getElementById('soulUrgeDescription').innerHTML = soulUrgeData?.shortDescription || '';

    // Personality
    const personalityData = NumerologyData.personalityReadings[numbers.personality];
    document.getElementById('personalityNumber').textContent = numbers.personality;
    document.getElementById('personalityKeyword').textContent = personalityData?.keyword || '';
    document.getElementById('personalityDescription').innerHTML = personalityData?.shortDescription || '';

    // Birthday
    const birthdayData = NumerologyData.birthdayReadings[numbers.birthday];
    document.getElementById('birthdayNumber').textContent = numbers.birthday;
    document.getElementById('birthdayKeyword').textContent = birthdayData?.keyword || '';
    document.getElementById('birthdayDescription').innerHTML = birthdayData?.description || '';

    // Personal Year
    const personalYearData = NumerologyData.personalYearReadings[numbers.personalYear];
    document.getElementById('personalYearNumber').textContent = numbers.personalYear;
    document.getElementById('personalYearKeyword').textContent = personalYearData?.keyword || '';
    document.getElementById('personalYearDescription').innerHTML = personalYearData?.description || '';

    // Pattern Analysis
    displayPatternAnalysis(numbers);

    // Reflection Questions
    displayReflectionQuestions(numbers.lifePath);
}

function displayPatternAnalysis(numbers) {
    const container = document.getElementById('patternAnalysis');
    const allNumbers = Object.values(numbers);
    
    // Count occurrences
    const counts = {};
    allNumbers.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
    });

    let html = '';
    
    // Check for repeated numbers
    Object.entries(counts).forEach(([num, count]) => {
        if (count > 1) {
            html += `<div class="pattern-item"><strong>Number ${num} appears ${count} times</strong> - This amplifies the energy of ${num} in your life. Pay special attention to this number's lessons and gifts.</div>`;
        }
    });

    // Check for master numbers
    const masterNumbers = allNumbers.filter(n => [11, 22, 33].includes(n));
    if (masterNumbers.length > 0) {
        html += `<div class="pattern-item"><strong>Master Number(s) Present: ${masterNumbers.join(', ')}</strong> - You carry heightened spiritual responsibility and potential.</div>`;
    }

    // Element balance (odd/even)
    const oddCount = allNumbers.filter(n => n % 2 !== 0).length;
    const evenCount = allNumbers.filter(n => n % 2 === 0).length;
    
    if (oddCount > evenCount) {
        html += `<div class="pattern-item"><strong>Masculine/Active Energy Dominant</strong> - You have more active, initiating energy. Focus on also developing receptivity.</div>`;
    } else if (evenCount > oddCount) {
        html += `<div class="pattern-item"><strong>Feminine/Receptive Energy Dominant</strong> - You have more receptive, nurturing energy. Focus on also developing assertiveness.</div>`;
    }

    container.innerHTML = html || '<div class="pattern-item">Your numbers show a balanced distribution of energies.</div>';
}

function displayReflectionQuestions(lifePathNumber) {
    const container = document.getElementById('reflectionQuestions');
    const questions = NumerologyData.reflectionQuestions[lifePathNumber] || [];
    
    let html = '';
    questions.forEach((question, index) => {
        html += `<div class="reflection-item"><span class="reflection-number">${index + 1}.</span> ${question}</div>`;
    });
    
    container.innerHTML = html;
}

function toggleExpand(section) {
    const expandedContent = document.getElementById(section + 'Expanded');
    const button = expandedContent.previousElementSibling;
    
    expandedContent.classList.toggle('active');
    
    if (expandedContent.classList.contains('active')) {
        button.textContent = 'Show Less ↑';
    } else {
        button.textContent = 'Read Full Analysis ↓';
    }
}// ================================
// DESTINY MATRIX
// ================================

const DestinyMatrixData = {
    arcana: {
        1: { name: "The Magician", energy: "Willpower, skill, resourcefulness", shadow: "Manipulation, poor planning", advice: "Use your talents wisely and ethically." },
        2: { name: "The High Priestess", energy: "Intuition, mystery, inner knowledge", shadow: "Secrets, disconnection from intuition", advice: "Trust your inner wisdom." },
        3: { name: "The Empress", energy: "Abundance, nurturing, creativity", shadow: "Creative blocks, dependence", advice: "Nurture yourself and your creations." },
        4: { name: "The Emperor", energy: "Authority, structure, control", shadow: "Tyranny, rigidity", advice: "Lead with wisdom and flexibility." },
        5: { name: "The Hierophant", energy: "Tradition, conformity, spiritual wisdom", shadow: "Dogma, restriction", advice: "Find your own spiritual truth." },
        6: { name: "The Lovers", energy: "Love, harmony, relationships", shadow: "Disharmony, imbalance", advice: "Choose love and alignment." },
        7: { name: "The Chariot", energy: "Determination, willpower, victory", shadow: "Lack of direction, aggression", advice: "Focus your will toward your goals." },
        8: { name: "Strength", energy: "Courage, patience, inner strength", shadow: "Self-doubt, weakness", advice: "Embrace your inner power with compassion." },
        9: { name: "The Hermit", energy: "Introspection, wisdom, guidance", shadow: "Isolation, loneliness", advice: "Seek wisdom within before looking outside." },
        10: { name: "Wheel of Fortune", energy: "Change, cycles, fate", shadow: "Bad luck, resistance to change", advice: "Flow with life's cycles." },
        11: { name: "Justice", energy: "Fairness, truth, law", shadow: "Unfairness, dishonesty", advice: "Act with integrity and seek balance." },
        12: { name: "The Hanged Man", energy: "Surrender, new perspectives, sacrifice", shadow: "Stalling, resistance", advice: "Let go to gain new perspective." },
        13: { name: "Death", energy: "Transformation, endings, rebirth", shadow: "Fear of change, stagnation", advice: "Embrace necessary endings for new beginnings." },
        14: { name: "Temperance", energy: "Balance, moderation, patience", shadow: "Imbalance, excess", advice: "Find the middle path." },
        15: { name: "The Devil", energy: "Shadow self, bondage, materialism", shadow: "Addiction, restriction", advice: "Face your shadows to find freedom." },
        16: { name: "The Tower", energy: "Sudden change, revelation, awakening", shadow: "Disaster, upheaval", advice: "Let false structures fall." },
        17: { name: "The Star", energy: "Hope, inspiration, serenity", shadow: "Despair, disconnection", advice: "Keep faith and follow your star." },
        18: { name: "The Moon", energy: "Illusion, intuition, the unconscious", shadow: "Confusion, fear", advice: "Trust your intuition through uncertainty." },
        19: { name: "The Sun", energy: "Joy, success, vitality", shadow: "Negativity, depression", advice: "Let your light shine brightly." },
        20: { name: "Judgement", energy: "Rebirth, calling, absolution", shadow: "Self-doubt, ignoring the call", advice: "Answer your higher calling." },
        21: { name: "The World", energy: "Completion, integration, accomplishment", shadow: "Incompletion, shortcuts", advice: "Celebrate your achievements and wholeness." },
        22: { name: "The Fool", energy: "New beginnings, innocence, spontaneity", shadow: "Recklessness, naivety", advice: "Trust the journey and take the leap." }
    }
};

function initDestinyMatrix() {
    const form = document.getElementById('matrixForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showLoading();
        
        setTimeout(() => {
            calculateDestinyMatrix();
            hideLoading();
        }, 1500);
    });
}

function calculateDestinyMatrix() {
    const birthDate = document.getElementById('matrixBirthDate').value;
    if (!birthDate) return;

    const dateObj = new Date(birthDate);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();

    // Calculate matrix points
    const soulNumber = reduceToArcana(day + month + year);
    const personalityNumber = reduceToArcana(day);
    const destinyNumber = reduceToArcana(day + month);
    const karmaNumber = reduceToArcana(month + year);
    const talentNumber = reduceToArcana(soulNumber + personalityNumber);

    // Display matrix
    displayMatrix({
        soul: soulNumber,
        personality: personalityNumber,
        destiny: destinyNumber,
        karma: karmaNumber,
        talent: talentNumber
    });

    document.getElementById('matrixResults').classList.remove('hidden');
}

function reduceToArcana(num) {
    while (num > 22) {
        num = String(num).split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }
    return num || 22; // 0 becomes 22 (The Fool)
}

function displayMatrix(points) {
    // Update visual points
    document.querySelector('#matrixCenter .point-number').textContent = points.soul;
    document.querySelector('#matrixTop .point-number').textContent = points.destiny;
    document.querySelector('#matrixRight .point-number').textContent = points.talent;
    document.querySelector('#matrixBottom .point-number').textContent = points.karma;
    document.querySelector('#matrixLeft .point-number').textContent = points.personality;

    // Display arcana cards
    const arcanaGrid = document.getElementById('arcanaGrid');
    arcanaGrid.innerHTML = '';

    Object.entries(points).forEach(([position, number]) => {
        const arcana = DestinyMatrixData.arcana[number];
        const card = document.createElement('div');
        card.className = 'arcana-card';
        card.innerHTML = `
            <div class="arcana-number">${number}</div>
            <div class="arcana-name">${arcana.name}</div>
            <div class="arcana-position">${position.charAt(0).toUpperCase() + position.slice(1)} Energy</div>
            <div class="arcana-description">${arcana.energy}</div>
            <div class="arcana-advice"><strong>Advice:</strong> ${arcana.advice}</div>
        `;
        arcanaGrid.appendChild(card);
    });

    // Update tabs content
    document.getElementById('soulTab').innerHTML = `<h4>Soul Purpose - Arcana ${points.soul}</h4><p>${DestinyMatrixData.arcana[points.soul].energy}</p><p><strong>Shadow:</strong> ${DestinyMatrixData.arcana[points.soul].shadow}</p>`;
    document.getElementById('talentsTab').innerHTML = `<h4>Your Talents - Arcana ${points.talent}</h4><p>${DestinyMatrixData.arcana[points.talent].energy}</p>`;
    document.getElementById('karmaTab').innerHTML = `<h4>Karmic Lessons - Arcana ${points.karma}</h4><p>${DestinyMatrixData.arcana[points.karma].shadow}</p><p><strong>Lesson:</strong> ${DestinyMatrixData.arcana[points.karma].advice}</p>`;
}

// ================================
// CHAKRA ANALYSIS
// ================================

const ChakraData = {
    chakras: {
        root: { name: "Root Chakra (Muladhara)", color: "#ff0000", location: "Base of spine", element: "Earth", themes: "Survival, security, grounding", balanced: "Feeling safe, grounded, and secure", imbalanced: "Fear, anxiety, instability" },
        sacral: { name: "Sacral Chakra (Svadhisthana)", color: "#ff7f00", location: "Lower abdomen", element: "Water", themes: "Creativity, sexuality, emotions", balanced: "Creative flow, healthy emotions, pleasure", imbalanced: "Emotional instability, creative blocks" },
        solar: { name: "Solar Plexus (Manipura)", color: "#ffff00", location: "Upper abdomen", element: "Fire", themes: "Personal power, confidence, will", balanced: "Confident, empowered, good self-esteem", imbalanced: "Low self-esteem, control issues" },
        heart: { name: "Heart Chakra (Anahata)", color: "#00ff00", location: "Center of chest", element: "Air", themes: "Love, compassion, connection", balanced: "Loving, compassionate, connected", imbalanced: "Grief, isolation, lack of empathy" },
        throat: { name: "Throat Chakra (Vishuddha)", color: "#00bfff", location: "Throat", element: "Ether", themes: "Communication, truth, expression", balanced: "Clear communication, authentic expression", imbalanced: "Difficulty expressing, fear of speaking" },
        thirdEye: { name: "Third Eye (Ajna)", color: "#4b0082", location: "Between eyebrows", element: "Light", themes: "Intuition, wisdom, insight", balanced: "Strong intuition, clear thinking", imbalanced: "Confusion, lack of insight" },
        crown: { name: "Crown Chakra (Sahasrara)", color: "#9400d3", location: "Top of head", element: "Cosmic Energy", themes: "Spirituality, connection to divine", balanced: "Spiritual connection, enlightenment", imbalanced: "Disconnection, spiritual crisis" }
    }
};

function initChakras() {
    const form = document.getElementById('chakraForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showLoading();
        
        setTimeout(() => {
            analyzeChakras();
            hideLoading();
        }, 1500);
    });
}

function analyzeChakras() {
    const birthDate = document.getElementById('chakraBirthDate').value;
    const name = document.getElementById('chakraName').value;
    
    if (!birthDate || !name) return;

    // Calculate chakra states based on numerology
    const lifePathNum = calculateLifePath(
        new Date(birthDate).getDate(),
        new Date(birthDate).getMonth() + 1,
        new Date(birthDate).getFullYear()
    );

    displayChakraResults(lifePathNum);
    document.getElementById('chakraResults').classList.remove('hidden');
}

function displayChakraResults(lifePathNum) {
    const container = document.getElementById('chakraDetails');
    container.innerHTML = '';

    Object.entries(ChakraData.chakras).forEach(([key, chakra]) => {
        const card = document.createElement('div');
        card.className = 'chakra-detail-card';
        card.style.borderLeftColor = chakra.color;
        
        card.innerHTML = `
            <h4 style="color: ${chakra.color}">${chakra.name}</h4>
            <p><strong>Location:</strong> ${chakra.location}</p>
            <p><strong>Element:</strong> ${chakra.element}</p>
            <p><strong>Themes:</strong> ${chakra.themes}</p>
            <p><strong>When Balanced:</strong> ${chakra.balanced}</p>
            <p><strong>When Imbalanced:</strong> ${chakra.imbalanced}</p>
            <p><strong>Healing Practices:</strong> Meditation, yoga, color therapy with ${chakra.color}, working with ${chakra.element} element.</p>
        `;
        
        container.appendChild(card);
    });
}

// ================================
// ASTROLOGY
// ================================

function initAstrology() {
    const form = document.getElementById('astrologyForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showLoading();
        
        setTimeout(() => {
            calculateBirthChart();
            hideLoading();
        }, 2000);
    });

    // Initialize zodiac grid
    displayZodiacGrid();
}

function calculateBirthChart() {
    const birthDate = document.getElementById('astroBirthDate').value;
    const birthTime = document.getElementById('astroBirthTime').value;
    const latitude = parseFloat(document.getElementById('astroLatitude').value);
    const longitude = parseFloat(document.getElementById('astroLongitude').value);

    if (!birthDate || !birthTime || isNaN(latitude) || isNaN(longitude)) {
        alert('Please fill in all fields with valid data.');
        return;
    }

    // Calculate positions (simplified - real astrology requires ephemeris)
    const dateObj = new Date(birthDate + 'T' + birthTime);
    const dayOfYear = getDayOfYear(dateObj);
    
    // Simplified sun sign calculation
    const sunDegrees = ((dayOfYear - 80) * (360/365) + 360) % 360;
    const sunSign = AstrologyData.getZodiacSign(sunDegrees);
    
    // Simplified moon sign (cycles every ~28 days)
    const moonDegrees = (dayOfYear * 13.2 + longitude) % 360;
    const moonSign = AstrologyData.getZodiacSign(moonDegrees);
    
    // Rising sign based on birth time and location
    const [hours, minutes] = birthTime.split(':').map(Number);
    const timeDecimal = hours + minutes/60;
    const risingDegrees = ((sunDegrees + (timeDecimal * 15) + longitude) % 360 + 360) % 360;
    const risingSign = AstrologyData.getZodiacSign(risingDegrees);

    displayBirthChart({
        sun: sunSign,
        moon: moonSign,
        rising: risingSign,
        sunDegrees,
        moonDegrees,
        risingDegrees,
        latitude,
        longitude
    });

    document.getElementById('astrologyResults').classList.remove('hidden');
}

function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

function displayBirthChart(data) {
    const sunData = AstrologyData.zodiacSigns[data.sun];
    const moonData = AstrologyData.zodiacSigns[data.moon];
    const risingData = AstrologyData.zodiacSigns[data.rising];

    // Update big three
    document.getElementById('sunSymbol').textContent = sunData.symbol;
    document.getElementById('sunSign').textContent = sunData.name;
    document.getElementById('moonSymbol').textContent = moonData.symbol;
    document.getElementById('moonSign').textContent = moonData.name;
    document.getElementById('risingSymbol').textContent = risingData.symbol;
    document.getElementById('risingSign').textContent = risingData.name;

    // Draw chart wheel
    drawChartWheel(data);

    // Fill tabs
    fillAstrologyTabs(data, sunData, moonData, risingData);
}

function drawChartWheel(data) {
    const canvas = document.getElementById('birthChartWheel');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 200;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw outer circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw house divisions
    for (let i = 0; i < 12; i++) {
        const angle = (i * 30 - 90) * Math.PI / 180;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(
            centerX + radius * Math.cos(angle),
            centerY + radius * Math.sin(angle)
        );
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)';
        ctx.stroke();

        // Add zodiac symbols
        const signAngle = ((i * 30) + 15 - 90) * Math.PI / 180;
        const signs = Object.values(AstrologyData.zodiacSigns);
        ctx.font = '20px serif';
        ctx.fillStyle = '#9b6dcc';
        ctx.textAlign = 'center';
        ctx.fillText(
            signs[i].symbol,
            centerX + (radius - 25) * Math.cos(signAngle),
            centerY + (radius - 25) * Math.sin(signAngle) + 7
        );
    }

    // Draw inner circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.6, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.5)';
    ctx.stroke();

    // Draw planets
    drawPlanet(ctx, centerX, centerY, radius * 0.7, data.sunDegrees, '☉', '#ffd700');
    drawPlanet(ctx, centerX, centerY, radius * 0.55, data.moonDegrees, '☽', '#c0c0c0');
    drawPlanet(ctx, centerX, centerY, radius * 0.45, data.risingDegrees, 'AC', '#ff69b4');
}

function drawPlanet(ctx, cx, cy, r, degrees, symbol, color) {
    const angle = (degrees - 90) * Math.PI / 180;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    
    ctx.font = 'bold 14px serif';
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.fillText(symbol, x, y + 5);
}

function fillAstrologyTabs(data, sunData, moonData, risingData) {
    // Planets tab
    document.getElementById('planetsTab').innerHTML = `
        <h4>☉ Sun in ${sunData.name}</h4>
        <p>${sunData.description}</p>
        <p><strong>Strengths:</strong> ${sunData.strengths}</p>
        
        <h4>☽ Moon in ${moonData.name}</h4>
        <p>Your emotional nature resonates with ${moonData.name} energy. ${moonData.description}</p>
        
        <h4>↑ Rising Sign: ${risingData.name}</h4>
        <p>You appear to the world as ${risingData.traits.join(', ')}. ${risingData.description}</p>
    `;

    // Houses tab
    let housesHtml = '<h4>House Meanings</h4>';
    Object.entries(AstrologyData.houses).forEach(([num, house]) => {
        housesHtml += `<div class="house-item"><strong>${house.name}:</strong> ${house.theme} - ${house.description}</div>`;
    });
    document.getElementById('housesTab').innerHTML = housesHtml;

    // Elements tab
    const sunElement = sunData.element.toLowerCase();
    const moonElement = moonData.element.toLowerCase();
    document.getElementById('elementsTab').innerHTML = `
        <h4>Your Elemental Balance</h4>
        <p><strong>Sun Element (${sunData.element}):</strong> ${AstrologyData.elements[sunElement]?.description || ''}</p>
        <p><strong>Moon Element (${moonData.element}):</strong> ${AstrologyData.elements[moonElement]?.description || ''}</p>
        <h4>Modality</h4>
        <p><strong>Sun Modality (${sunData.modality}):</strong> ${AstrologyData.modalities[sunData.modality.toLowerCase()]?.description || ''}</p>
    `;

    // Career tab
    document.getElementById('careerTab').innerHTML = `
        <h4>Career Indicators</h4>
        <p><strong>Sun Sign Career Traits:</strong> ${sunData.careerTraits}</p>
        <p>With your Rising in ${risingData.name}, you present yourself professionally as ${risingData.traits.slice(0, 3).join(', ')}.</p>
    `;

    // Relationships tab
    document.getElementById('relationshipsTab').innerHTML = `
        <h4>Relationship Style</h4>
        <p><strong>Sun in ${sunData.name}:</strong> ${sunData.loveStyle}</p>
        <p><strong>Moon in ${moonData.name}:</strong> Emotionally, you need ${moonData.traits.slice(0, 3).join(', ')} energy in relationships.</p>
    `;

    // Spiritual tab
    document.getElementById('spiritualTab').innerHTML = `
        <h4>Spiritual Themes</h4>
        <p>Your ${sunData.name} Sun seeks spiritual growth through ${sunData.element} element practices.</p>
        <p>Your ${moonData.name} Moon finds emotional healing through connecting with ${moonData.element} energy.</p>
    `;
}

function displayZodiacGrid() {
    const grid = document.getElementById('zodiacGrid');
    if (!grid) return;

    grid.innerHTML = '';
    Object.entries(AstrologyData.zodiacSigns).forEach(([key, sign]) => {
        const item = document.createElement('div');
        item.className = 'zodiac-item';
        item.innerHTML = `
            <div class="zodiac-symbol">${sign.symbol}</div>
            <div class="zodiac-info">
                <h5>${sign.name}</h5>
                <p>${sign.dates} • ${sign.element} • ${sign.modality}</p>
            </div>
        `;
        grid.appendChild(item);
    });
}

// ================================
// COMPATIBILITY
// ================================

function initCompatibility() {
    const form = document.getElementById('compatibilityForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showLoading();
        
        setTimeout(() => {
            calculateCompatibility();
            hideLoading();
        }, 1500);
    });
}

function calculateCompatibility() {
    const date1 = document.getElementById('person1Date').value;
    const date2 = document.getElementById('person2Date').value;
    const name1 = document.getElementById('person1Name').value;
    const name2 = document.getElementById('person2Name').value;

    if (!date1 || !date2) return;

    // Calculate life path numbers
    const lp1 = calculateLifePath(
        new Date(date1).getDate(),
        new Date(date1).getMonth() + 1,
        new Date(date1).getFullYear()
    );
    const lp2 = calculateLifePath(
        new Date(date2).getDate(),
        new Date(date2).getMonth() + 1,
        new Date(date2).getFullYear()
    );

    // Calculate compatibility scores
    const baseScore = calculateBaseCompatibility(lp1, lp2);
    const romance = Math.min(100, baseScore + Math.floor(Math.random() * 15));
    const communication = Math.min(100, baseScore + Math.floor(Math.random() * 20) - 5);
    const goals = Math.min(100, baseScore + Math.floor(Math.random() * 15) - 10);
    const passion = Math.min(100, baseScore + Math.floor(Math.random() * 25) - 5);
    const trust = Math.min(100, baseScore + Math.floor(Math.random() * 10));

    const overallScore = Math.round((romance + communication + goals + passion + trust) / 5);

    displayCompatibilityResults({
        overall: overallScore,
        romance,
        communication,
        goals,
        passion,
        trust,
        lp1,
        lp2,
        name1,
        name2
    });

    document.getElementById('compatibilityResults').classList.remove('hidden');
}

function calculateBaseCompatibility(lp1, lp2) {
    // Simplified compatibility matrix
    const compatibilityMatrix = {
        1: { 1: 70, 2: 60, 3: 85, 4: 50, 5: 90, 6: 65, 7: 55, 8: 75, 9: 80 },
        2: { 1: 60, 2: 75, 3: 70, 4: 85, 5: 55, 6: 90, 7: 65, 8: 80, 9: 70 },
        3: { 1: 85, 2: 70, 3: 80, 4: 55, 5: 90, 6: 75, 7: 60, 8: 65, 9: 85 },
        4: { 1: 50, 2: 85, 3: 55, 4: 70, 5: 45, 6: 80, 7: 75, 8: 90, 9: 60 },
        5: { 1: 90, 2: 55, 3: 90, 4: 45, 5: 75, 6: 50, 7: 85, 8: 60, 9: 80 },
        6: { 1: 65, 2: 90, 3: 75, 4: 80, 5: 50, 6: 70, 7: 55, 8: 85, 9: 90 },
        7: { 1: 55, 2: 65, 3: 60, 4: 75, 5: 85, 6: 55, 7: 80, 8: 50, 9: 70 },
        8: { 1: 75, 2: 80, 3: 65, 4: 90, 5: 60, 6: 85, 7: 50, 8: 70, 9: 55 },
        9: { 1: 80, 2: 70, 3: 85, 4: 60, 5: 80, 6: 90, 7: 70, 8: 55, 9: 75 }
    };

    const n1 = lp1 > 9 ? reduceNumber(lp1) : lp1;
    const n2 = lp2 > 9 ? reduceNumber(lp2) : lp2;

    return compatibilityMatrix[n1]?.[n2] || 65;
}

function displayCompatibilityResults(data) {
    // Animate score
    const scoreEl = document.getElementById('compatScore');
    const scoreFill = document.getElementById('compatScoreFill');
    
    animateNumber(scoreEl, 0, data.overall, 2000);
    
    const circumference = 2 * Math.PI * 90;
    const offset = circumference - (data.overall / 100) * circumference;
    scoreFill.style.strokeDashoffset = offset;

    // Update label
    let label = 'Good Match';
    if (data.overall >= 85) label = 'Soul Connection';
    else if (data.overall >= 70) label = 'Strong Compatibility';
    else if (data.overall >= 55) label = 'Good Potential';
    else label = 'Challenging but Growth-Oriented';
    
    document.getElementById('compatLabel').textContent = label;

    // Update area bars
    const areas = ['romance', 'communication', 'goals', 'passion', 'trust'];
    areas.forEach(area => {
        const bar = document.getElementById(area + 'Bar');
        const score = document.getElementById(area + 'Score');
        bar.style.width = data[area] + '%';
        score.textContent = data[area] + '%';
    });

    // Details
    document.getElementById('compatDetails').innerHTML = `
        <div class="glass-card">
            <h4>Life Path Compatibility</h4>
            <p><strong>${data.name1}</strong> is a Life Path ${data.lp1}</p>
            <p><strong>${data.name2}</strong> is a Life Path ${data.lp2}</p>
            <p>This combination brings ${getCompatibilityDescription(data.lp1, data.lp2)}</p>
        </div>
    `;
}

function getCompatibilityDescription(lp1, lp2) {
    // Simplified descriptions
    const descriptions = {
        'same': 'deep understanding but potential for competition or mirroring issues.',
        'complementary': 'balance and complementary energies that support mutual growth.',
        'challenging': 'growth through challenge - you push each other to evolve.',
        'harmonious': 'natural harmony and easy flow of energy between you.'
    };

    if (lp1 === lp2) return descriptions.same;
    if (Math.abs(lp1 - lp2) === 3 || Math.abs(lp1 - lp2) === 6) return descriptions.harmonious;
    if (Math.abs(lp1 - lp2) === 4 || Math.abs(lp1 - lp2) === 5) return descriptions.challenging;
    return descriptions.complementary;
}

function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(start + (end - start) * progress);
        element.textContent = value;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// ================================
// REVIEWS
// ================================

function initReviews() {
    const form = document.getElementById('reviewForm');
    if (!form) return;

    // Initialize star rating
    const stars = document.querySelectorAll('#starRating .star');
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.dataset.rating;
            document.getElementById('reviewRating').value = rating;
            
            stars.forEach((s, index) => {
                s.classList.toggle('active', index < rating);
            });
        });
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        submitReview();
    });

    // Load existing reviews
    loadReviews();
}

function submitReview() {
    const name = document.getElementById('reviewerName').value;
    const rating = document.getElementById('reviewRating').value;
    const service = document.getElementById('reviewService').value;
    const text = document.getElementById('reviewText').value;

    if (!name || !service || !text) return;

    const review = {
        id: Date.now(),
        name,
        rating: parseInt(rating),
        service,
        text,
        date: new Date().toLocaleDateString()
    };

    // Get existing reviews
    const reviews = JSON.parse(localStorage.getItem('mysticalReviews') || '[]');
    reviews.unshift(review);
    localStorage.setItem('mysticalReviews', JSON.stringify(reviews));

    // Reset form
    document.getElementById('reviewForm').reset();
    document.querySelectorAll('#starRating .star').forEach((s, i) => {
        s.classList.toggle('active', i < 5);
    });

    // Reload reviews
    loadReviews();
}

function loadReviews() {
    const container = document.getElementById('reviewsList');
    if (!container) return;

    const reviews = JSON.parse(localStorage.getItem('mysticalReviews') || '[]');
    
    // Add some default reviews if none exist
    if (reviews.length === 0) {
        const defaultReviews = [
            { id: 1, name: "Sarah M.", rating: 5, service: "numerology", text: "Absolutely incredible! The numerology reading was so accurate it gave me chills. I finally understand my life path.", date: "2024-01-15" },
            { id: 2, name: "James K.", rating: 5, service: "astrology", text: "The birth chart reading was detailed and insightful. It helped me understand my relationships better.", date: "2024-01-10" },
            { id: 3, name: "Luna R.", rating: 4, service: "chakra", text: "Beautiful website and very informative chakra analysis. I learned so much about my energy centers.", date: "2024-01-08" }
        ];
        localStorage.setItem('mysticalReviews', JSON.stringify(defaultReviews));
        loadReviews();
        return;
    }

    container.innerHTML = reviews.map(review => `
        <div class="review-card">
            <div class="review-header">
                <div class="reviewer-info">
                    <div class="reviewer-avatar">${review.name.charAt(0)}</div>
                    <div>
                        <div class="reviewer-name">${review.name}</div>
                        <div class="review-service">${review.service.charAt(0).toUpperCase() + review.service.slice(1)} Reading</div>
                    </div>
                </div>
                <div class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
            </div>
            <p class="review-text">${review.text}</p>
            <div class="review-date">${review.date}</div>
        </div>
    `).join('');
}

// ================================
// UTILITY FUNCTIONS
// ================================

function initScrollEffects() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

function initTabs() {
    // Matrix tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabGroup = this.closest('.matrix-readings, .astrology-tabs');
            tabGroup.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            tabGroup.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
            
            this.classList.add('active');
            const tabId = this.dataset.tab + 'Tab';
            document.getElementById(tabId)?.classList.add('active');
        });
    });

    // Astrology tabs
    document.querySelectorAll('.astro-tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.astro-tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.astro-tab-panel').forEach(p => p.classList.remove('active'));
            
            this.classList.add('active');
            const tabId = this.dataset.tab + 'Tab';
            document.getElementById(tabId)?.classList.add('active');
        });
    });
}

function showLoading() {
    document.getElementById('loadingOverlay').classList.add('active');
}

function hideLoading() {
    document.getElementById('loadingOverlay').classList.remove('active');
}

function printResults(section) {
    window.print();
}

function shareResults(section) {
    if (navigator.share) {
        navigator.share({
            title: 'My Mystical Reading',
            text: 'Check out my spiritual reading from Mystical Portal!',
            url: window.location.href
        });
    } else {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    }
}

function downloadPDF(section) {
    alert('PDF generation would require a library like jsPDF. For now, use the Print function and select "Save as PDF".');
    window.print();
}
