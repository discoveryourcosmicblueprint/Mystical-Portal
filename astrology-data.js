// ================================
// ASTROLOGY DATA - Complete System
// ================================

const AstrologyData = {
    // Zodiac Signs
    zodiacSigns: {
        aries: {
            name: "Aries",
            symbol: "♈",
            element: "Fire",
            modality: "Cardinal",
            ruler: "Mars",
            dates: "March 21 - April 19",
            traits: ["Bold", "Ambitious", "Energetic", "Pioneering", "Competitive"],
            description: "Aries is the first sign of the zodiac, representing new beginnings and raw energy. As a Cardinal Fire sign ruled by Mars, Aries natives are natural pioneers who lead with courage and enthusiasm. They possess an innate drive to initiate action and blaze new trails.",
            strengths: "Courageous, determined, confident, enthusiastic, optimistic, honest, passionate",
            weaknesses: "Impatient, moody, short-tempered, impulsive, aggressive",
            loveStyle: "Passionate and direct in love, Aries pursues with intensity and needs excitement in relationships.",
            careerTraits: "Natural leaders who excel in competitive environments, entrepreneurship, sports, military, or any pioneering field."
        },
        taurus: {
            name: "Taurus",
            symbol: "♉",
            element: "Earth",
            modality: "Fixed",
            ruler: "Venus",
            dates: "April 20 - May 20",
            traits: ["Reliable", "Patient", "Sensual", "Determined", "Practical"],
            description: "Taurus is the fixed Earth sign ruled by Venus, representing stability, beauty, and material security. Taurus natives are grounded individuals who appreciate life's pleasures and build lasting foundations through persistent effort.",
            strengths: "Reliable, patient, practical, devoted, responsible, stable",
            weaknesses: "Stubborn, possessive, uncompromising, materialistic",
            loveStyle: "Sensual and devoted, Taurus seeks security and physical affection in relationships.",
            careerTraits: "Excel in finance, art, music, farming, architecture, or any field requiring patience and aesthetic sense."
        },
        gemini: {
            name: "Gemini",
            symbol: "♊",
            element: "Air",
            modality: "Mutable",
            ruler: "Mercury",
            dates: "May 21 - June 20",
            traits: ["Curious", "Adaptable", "Witty", "Communicative", "Versatile"],
            description: "Gemini is the mutable Air sign ruled by Mercury, representing communication, curiosity, and intellectual versatility. Gemini natives are quick-witted individuals who thrive on variety and mental stimulation.",
            strengths: "Gentle, affectionate, curious, adaptable, ability to learn quickly",
            weaknesses: "Nervous, inconsistent, indecisive, superficial",
            loveStyle: "Needs mental stimulation and variety in relationships. Communication is essential.",
            careerTraits: "Excel in writing, journalism, teaching, sales, or any field requiring communication and adaptability."
        },
        cancer: {
            name: "Cancer",
            symbol: "♋",
            element: "Water",
            modality: "Cardinal",
            ruler: "Moon",
            dates: "June 21 - July 22",
            traits: ["Nurturing", "Intuitive", "Protective", "Emotional", "Loyal"],
            description: "Cancer is the cardinal Water sign ruled by the Moon, representing emotional depth, nurturing, and home. Cancer natives are deeply intuitive individuals who protect and care for those they love.",
            strengths: "Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive",
            weaknesses: "Moody, pessimistic, suspicious, manipulative, insecure",
            loveStyle: "Deeply nurturing and protective in love, seeking emotional security and family connection.",
            careerTraits: "Excel in caregiving, hospitality, real estate, psychology, or any field involving nurturing."
        },
        leo: {
            name: "Leo",
            symbol: "♌",
            element: "Fire",
            modality: "Fixed",
            ruler: "Sun",
            dates: "July 23 - August 22",
            traits: ["Confident", "Creative", "Generous", "Dramatic", "Warm-hearted"],
            description: "Leo is the fixed Fire sign ruled by the Sun, representing self-expression, creativity, and leadership. Leo natives are charismatic individuals who shine brightly and inspire others with their warmth.",
            strengths: "Creative, passionate, generous, warm-hearted, cheerful, humorous",
            weaknesses: "Arrogant, stubborn, self-centered, lazy, inflexible",
            loveStyle: "Romantic and dramatic in love, Leo needs admiration and gives generously to partners.",
            careerTraits: "Excel in entertainment, leadership, politics, or any field offering recognition and creative expression."
        },
        virgo: {
            name: "Virgo",
            symbol: "♍",
            element: "Earth",
            modality: "Mutable",
            ruler: "Mercury",
            dates: "August 23 - September 22",
            traits: ["Analytical", "Practical", "Helpful", "Perfectionist", "Detail-oriented"],
            description: "Virgo is the mutable Earth sign ruled by Mercury, representing analysis, service, and practical improvement. Virgo natives are detail-oriented individuals who seek to perfect and heal.",
            strengths: "Loyal, analytical, kind, hardworking, practical, attentive",
            weaknesses: "Overly critical, worry-prone, shy, perfectionist",
            loveStyle: "Shows love through acts of service and attention to detail. Needs intellectual compatibility.",
            careerTraits: "Excel in healthcare, editing, analysis, crafts, or any field requiring precision and service."
        },
        libra: {
            name: "Libra",
            symbol: "♎",
            element: "Air",
            modality: "Cardinal",
            ruler: "Venus",
            dates: "September 23 - October 22",
            traits: ["Diplomatic", "Fair-minded", "Social", "Aesthetic", "Partnership-oriented"],
            description: "Libra is the cardinal Air sign ruled by Venus, representing balance, harmony, and relationships. Libra natives are natural diplomats who seek beauty and fairness in all things.",
            strengths: "Cooperative, diplomatic, gracious, fair-minded, social",
            weaknesses: "Indecisive, avoids confrontation, self-pity, holds grudges",
            loveStyle: "Seeks harmony and beauty in relationships. Partnership is essential for fulfillment.",
            careerTraits: "Excel in law, diplomacy, art, design, or any field involving aesthetics and mediation."
        },
        scorpio: {
            name: "Scorpio",
            symbol: "♏",
            element: "Water",
            modality: "Fixed",
            ruler: "Pluto/Mars",
            dates: "October 23 - November 21",
            traits: ["Intense", "Passionate", "Resourceful", "Transformative", "Mysterious"],
            description: "Scorpio is the fixed Water sign ruled by Pluto and Mars, representing transformation, depth, and power. Scorpio natives are intense individuals who probe life's mysteries and transform through crisis.",
            strengths: "Resourceful, brave, passionate, stubborn, strategic, loyal",
            weaknesses: "Jealous, secretive, resentful, manipulative",
            loveStyle: "Intense and all-or-nothing in love. Seeks deep emotional and physical connection.",
            careerTraits: "Excel in research, psychology, investigation, healing, or any field involving depth and transformation."
        },
        sagittarius: {
            name: "Sagittarius",
            symbol: "♐",
            element: "Fire",
            modality: "Mutable",
            ruler: "Jupiter",
            dates: "November 22 - December 21",
            traits: ["Optimistic", "Adventurous", "Philosophical", "Freedom-loving", "Honest"],
            description: "Sagittarius is the mutable Fire sign ruled by Jupiter, representing expansion, wisdom, and adventure. Sagittarius natives are seekers who explore both physical and philosophical horizons.",
            strengths: "Generous, idealistic, great sense of humor, adventurous",
            weaknesses: "Promises more than can deliver, impatient, tactless",
            loveStyle: "Needs freedom and adventure in relationships. Values honesty and shared exploration.",
            careerTraits: "Excel in teaching, travel, publishing, philosophy, or any field involving expansion and wisdom."
        },
        capricorn: {
            name: "Capricorn",
            symbol: "♑",
            element: "Earth",
            modality: "Cardinal",
            ruler: "Saturn",
            dates: "December 22 - January 19",
            traits: ["Ambitious", "Disciplined", "Responsible", "Strategic", "Traditional"],
            description: "Capricorn is the cardinal Earth sign ruled by Saturn, representing ambition, structure, and achievement. Capricorn natives are determined individuals who climb steadily toward their goals.",
            strengths: "Responsible, disciplined, self-control, good managers",
            weaknesses: "Know-it-all, unforgiving, condescending, pessimistic",
            loveStyle: "Takes relationships seriously. Seeks stability and long-term commitment.",
            careerTraits: "Excel in business, management, government, or any field requiring long-term planning and authority."
        },
        aquarius: {
            name: "Aquarius",
            symbol: "♒",
            element: "Air",
            modality: "Fixed",
            ruler: "Uranus/Saturn",
            dates: "January 20 - February 18",
            traits: ["Innovative", "Humanitarian", "Independent", "Original", "Progressive"],
            description: "Aquarius is the fixed Air sign ruled by Uranus and Saturn, representing innovation, humanity, and originality. Aquarius natives are progressive thinkers who envision a better future for all.",
            strengths: "Progressive, original, independent, humanitarian",
            weaknesses: "Runs from emotional expression, temperamental, uncompromising, aloof",
            loveStyle: "Values friendship and intellectual connection. Needs space and unconventional approaches.",
            careerTraits: "Excel in technology, science, humanitarian work, or any field involving innovation and social progress."
        },
        pisces: {
            name: "Pisces",
            symbol: "♓",
            element: "Water",
            modality: "Mutable",
            ruler: "Neptune/Jupiter",
            dates: "February 19 - March 20",
            traits: ["Intuitive", "Compassionate", "Artistic", "Dreamy", "Spiritual"],
            description: "Pisces is the mutable Water sign ruled by Neptune and Jupiter, representing spirituality, imagination, and universal love. Pisces natives are deeply intuitive individuals who transcend ordinary boundaries.",
            strengths: "Compassionate, artistic, intuitive, gentle, wise, musical",
            weaknesses: "Fearful, overly trusting, sad, desire to escape reality",
            loveStyle: "Romantic and idealistic in love. Seeks soul-deep connection and spiritual union.",
            careerTraits: "Excel in arts, music, healing, spirituality, or any field involving imagination and compassion."
        }
    },

    // Planet Meanings
    planets: {
        sun: {
            name: "Sun",
            symbol: "☉",
            meaning: "Core identity, ego, vitality, life force",
            rules: "Leo",
            keywords: ["Self", "Identity", "Purpose", "Vitality", "Father"],
            description: "The Sun represents your core self, ego, and life purpose. It shows how you shine and express your individuality."
        },
        moon: {
            name: "Moon",
            symbol: "☽",
            meaning: "Emotions, instincts, nurturing, subconscious",
            rules: "Cancer",
            keywords: ["Emotions", "Instincts", "Mother", "Home", "Security"],
            description: "The Moon represents your emotional nature, instincts, and what you need to feel secure and nurtured."
        },
        mercury: {
            name: "Mercury",
            symbol: "☿",
            meaning: "Communication, thinking, learning, commerce",
            rules: "Gemini, Virgo",
            keywords: ["Communication", "Thinking", "Learning", "Travel", "Technology"],
            description: "Mercury represents how you think, communicate, and process information."
        },
        venus: {
            name: "Venus",
            symbol: "♀",
            meaning: "Love, beauty, values, relationships, money",
            rules: "Taurus, Libra",
            keywords: ["Love", "Beauty", "Values", "Pleasure", "Art"],
            description: "Venus represents what you love, value, and find beautiful. It governs relationships and attraction."
        },
        mars: {
            name: "Mars",
            symbol: "♂",
            meaning: "Action, desire, aggression, energy, courage",
            rules: "Aries",
            keywords: ["Action", "Desire", "Courage", "Anger", "Sex"],
            description: "Mars represents how you assert yourself, pursue desires, and handle conflict."
        },
        jupiter: {
            name: "Jupiter",
            symbol: "♃",
            meaning: "Expansion, luck, philosophy, higher learning",
            rules: "Sagittarius",
            keywords: ["Expansion", "Luck", "Wisdom", "Travel", "Growth"],
            description: "Jupiter represents expansion, opportunity, and where you find luck and meaning."
        },
        saturn: {
            name: "Saturn",
            symbol: "♄",
            meaning: "Structure, discipline, limitations, karma, time",
            rules: "Capricorn",
            keywords: ["Discipline", "Responsibility", "Limits", "Time", "Karma"],
            description: "Saturn represents structure, discipline, and the lessons you must learn through challenge."
        },
        uranus: {
            name: "Uranus",
            symbol: "♅",
            meaning: "Innovation, rebellion, sudden change, awakening",
            rules: "Aquarius",
            keywords: ["Innovation", "Revolution", "Freedom", "Awakening", "Technology"],
            description: "Uranus represents where you break free, innovate, and experience sudden awakening."
        },
        neptune: {
            name: "Neptune",
            symbol: "♆",
            meaning: "Dreams, illusion, spirituality, transcendence",
            rules: "Pisces",
            keywords: ["Dreams", "Illusion", "Spirituality", "Compassion", "Art"],
            description: "Neptune represents your spiritual nature, dreams, and where boundaries dissolve."
        },
        pluto: {
            name: "Pluto",
            symbol: "♇",
            meaning: "Transformation, power, death/rebirth, the shadow",
            rules: "Scorpio",
            keywords: ["Transformation", "Power", "Death/Rebirth", "Shadow", "Intensity"],
            description: "Pluto represents deep transformation, power dynamics, and psychological depths."
        },
        northNode: {
            name: "North Node",
            symbol: "☊",
            meaning: "Soul purpose, destiny, growth direction",
            keywords: ["Destiny", "Growth", "Future", "Purpose"],
            description: "The North Node represents your soul's purpose and the direction of growth in this lifetime."
        },
        southNode: {
            name: "South Node",
            symbol: "☋",
            meaning: "Past life karma, comfort zone, gifts from past",
            keywords: ["Past", "Karma", "Comfort Zone", "Gifts"],
            description: "The South Node represents past life tendencies, natural talents, and what you're moving away from."
        },
        chiron: {
            name: "Chiron",
            symbol: "⚷",
            meaning: "Wounds, healing, teaching through experience",
            keywords: ["Wounds", "Healing", "Teaching", "Wisdom"],
            description: "Chiron represents your deepest wound and your capacity to heal others through your own healing journey."
        }
    },

    // Houses
    houses: {
        1: { name: "First House", theme: "Self, Identity, Appearance", description: "The house of self, physical body, and first impressions. How you present yourself to the world." },
        2: { name: "Second House", theme: "Money, Values, Possessions", description: "The house of material resources, values, and self-worth. What you own and value." },
        3: { name: "Third House", theme: "Communication, Siblings, Local", description: "The house of communication, siblings, short trips, and early education." },
        4: { name: "Fourth House", theme: "Home, Family, Roots", description: "The house of home, family, ancestry, and emotional foundations. The private self." },
        5: { name: "Fifth House", theme: "Creativity, Romance, Children", description: "The house of creative expression, romance, children, and pleasure." },
        6: { name: "Sixth House", theme: "Health, Work, Service", description: "The house of daily work, health, service, and routines." },
        7: { name: "Seventh House", theme: "Partnership, Marriage, Others", description: "The house of committed partnerships, marriage, and one-on-one relationships." },
        8: { name: "Eighth House", theme: "Transformation, Shared Resources", description: "The house of transformation, shared resources, intimacy, and death/rebirth." },
        9: { name: "Ninth House", theme: "Philosophy, Travel, Higher Learning", description: "The house of higher education, philosophy, long-distance travel, and beliefs." },
        10: { name: "Tenth House", theme: "Career, Public Image, Authority", description: "The house of career, public reputation, authority, and life direction." },
        11: { name: "Eleventh House", theme: "Friends, Groups, Hopes", description: "The house of friends, groups, social causes, and future hopes." },
        12: { name: "Twelfth House", theme: "Spirituality, Hidden, Endings", description: "The house of spirituality, the unconscious, hidden matters, and endings." }
    },

    // Aspects
    aspects: {
        conjunction: { name: "Conjunction", symbol: "☌", angle: 0, orb: 8, nature: "Powerful", description: "Planets blend their energies intensely. Can be harmonious or challenging depending on planets involved." },
        sextile: { name: "Sextile", symbol: "⚹", angle: 60, orb: 6, nature: "Harmonious", description: "Opportunities and talents that flow easily. Requires some effort to activate." },
        square: { name: "Square", symbol: "□", angle: 90, orb: 8, nature: "Challenging", description: "Tension and conflict that drives growth. Creates friction but also motivation for change." },
        trine: { name: "Trine", symbol: "△", angle: 120, orb: 8, nature: "Harmonious", description: "Natural talents and easy flow of energy. Gifts that come naturally." },
        opposition: { name: "Opposition", symbol: "☍", angle: 180, orb: 8, nature: "Challenging", description: "Awareness through polarity. Can create balance or see-sawing between extremes." }
    },

    // Elements
    elements: {
        fire: {
            name: "Fire",
            signs: ["Aries", "Leo", "Sagittarius"],
            traits: "Passionate, dynamic, temperamental, enthusiastic, competitive",
            description: "Fire signs are passionate, dynamic, and temperamental. They get angry quickly but also forgive easily. They are adventurous and energetic."
        },
        earth: {
            name: "Earth",
            signs: ["Taurus", "Virgo", "Capricorn"],
            traits: "Practical, grounded, reliable, patient, materialistic",
            description: "Earth signs are grounded and practical. They focus on material reality and building tangible results. Loyal and stable."
        },
        air: {
            name: "Air",
            signs: ["Gemini", "Libra", "Aquarius"],
            traits: "Intellectual, communicative, social, analytical, detached",
            description: "Air signs are intellectual and communicative. They love analyzing, socializing, and exchanging ideas. Can be detached from emotions."
        },
        water: {
            name: "Water",
            signs: ["Cancer", "Scorpio", "Pisces"],
            traits: "Emotional, intuitive, sensitive, compassionate, mysterious",
            description: "Water signs are emotional and intuitive. They are deeply sensitive and feel things profoundly. Highly empathetic and mysterious."
        }
    },

    // Modalities
    modalities: {
        cardinal: {
            name: "Cardinal",
            signs: ["Aries", "Cancer", "Libra", "Capricorn"],
            traits: "Initiating, leadership, active, starting new things",
            description: "Cardinal signs initiate action and lead. They start new cycles and take charge."
        },
        fixed: {
            name: "Fixed",
            signs: ["Taurus", "Leo", "Scorpio", "Aquarius"],
            traits: "Stabilizing, persistent, determined, resistant to change",
            description: "Fixed signs stabilize and persist. They are determined and see things through to completion."
        },
        mutable: {
            name: "Mutable",
            signs: ["Gemini", "Virgo", "Sagittarius", "Pisces"],
            traits: "Adaptable, flexible, changeable, versatile",
            description: "Mutable signs adapt and change. They are flexible and help transition between seasons."
        }
    },

    // Chart Patterns
    chartPatterns: {
        bundle: { name: "Bundle", description: "All planets within 120°. Focused, specialist, concentrated energy." },
        bowl: { name: "Bowl", description: "Planets occupy half the chart. Self-contained, purposeful, awareness of what's missing." },
        bucket: { name: "Bucket", description: "Bowl with one planet opposite. Handle planet becomes a release point for chart energy." },
        locomotive: { name: "Locomotive", description: "Planets span 240° with 120° empty. Driven, determined, self-motivating." },
        seesaw: { name: "See-Saw", description: "Two groups of planets opposite each other. Awareness of duality, balance seeking." },
        splash: { name: "Splash", description: "Planets spread evenly throughout chart. Versatile, diverse interests, scattered energy." },
        splay: { name: "Splay", description: "Planets in strong groupings with empty areas. Individualistic, self-motivated." },
        grandTrine: { name: "Grand Trine", description: "Three planets forming an equilateral triangle (trines). Great talent and flow in that element." },
        tSquare: { name: "T-Square", description: "Two planets in opposition both square a third. Dynamic tension creating drive." },
        grandCross: { name: "Grand Cross", description: "Four planets forming a cross pattern. Great tension but potential for achievement." },
        yod: { name: "Yod (Finger of God)", description: "Two planets sextile each other, both quincunx a third. Fated quality, special purpose." }
    },

    // Calculate zodiac sign from degrees
    getZodiacSign: function(degrees) {
        const signs = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 
                       'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];
        const signIndex = Math.floor(degrees / 30) % 12;
        return signs[signIndex];
    },

    // Calculate house from degrees and ascendant
    getHouse: function(planetDegrees, ascendantDegrees) {
        let adjustedDegrees = (planetDegrees - ascendantDegrees + 360) % 360;
        return Math.floor(adjustedDegrees / 30) + 1;
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AstrologyData;
}
