// ================================
// NUMEROLOGY DATA - Complete Readings
// ================================

const NumerologyData = {
    // Letter to number conversion (Pythagorean system)
    letterValues: {
        'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
        'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
        'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
    },

    vowels: ['A', 'E', 'I', 'O', 'U'],

    // Master Numbers
    masterNumbers: [11, 22, 33],

    // ================================
    // LIFE PATH NUMBER READINGS
    // ================================
    lifePathReadings: {
        1: {
            keyword: "The Pioneer & Leader",
            shortDescription: "You are here to learn independence, self-reliance, and leadership. Your path is about standing on your own two feet and blazing new trails.",
            fullReading: `
                <h5>Core Essence</h5>
                <p>Life Path 1 individuals are the pioneers of numerology. You possess an innate drive to be first, to lead, and to create new beginnings. Your soul chose this lifetime to develop independence, originality, and the courage to stand alone when necessary.</p>
                
                <h5>Strengths & Gifts</h5>
                <ul>
                    <li>Natural leadership abilities that inspire others</li>
                    <li>Original thinking and innovative problem-solving</li>
                    <li>Strong willpower and determination</li>
                    <li>Courage to take initiative and start new projects</li>
                    <li>Self-motivation and independence</li>
                    <li>Ability to think outside conventional boundaries</li>
                </ul>
                
                <h5>Life Lessons & Challenges</h5>
                <p>Your greatest challenge is balancing your need for independence with cooperation. You may struggle with:</p>
                <ul>
                    <li>Learning to accept help without feeling diminished</li>
                    <li>Overcoming tendencies toward stubbornness or arrogance</li>
                    <li>Developing patience with those who move slower</li>
                    <li>Finding the balance between self-focus and consideration for others</li>
                </ul>
                
                <h5>Career & Purpose</h5>
                <p>You thrive in positions where you can lead, innovate, or work independently. Ideal paths include entrepreneurship, management, creative direction, invention, or any field where you can pioneer new approaches.</p>
                
                <h5>Relationships</h5>
                <p>In relationships, you need a partner who respects your independence while providing emotional support. You're attracted to strong individuals but must learn to share the spotlight and practice compromise.</p>
                
                <h5>Spiritual Growth</h5>
                <p>Your spiritual journey involves learning that true strength includes vulnerability, and that leading often means serving. Meditation on humility and interconnectedness will balance your powerful individual energy.</p>
            `,
            affirmation: "I am a confident leader who creates positive change while honoring others' paths."
        },
        2: {
            keyword: "The Peacemaker & Diplomat",
            shortDescription: "You are here to learn cooperation, partnership, and the power of sensitivity. Your path is about bringing harmony and balance to the world.",
            fullReading: `
                <h5>Core Essence</h5>
                <p>Life Path 2 individuals are the peacemakers and diplomats of numerology. You possess profound sensitivity, intuition, and the gift of seeing both sides of any situation. Your soul chose this lifetime to master the art of cooperation, patience, and harmony.</p>
                
                <h5>Strengths & Gifts</h5>
                <ul>
                    <li>Exceptional diplomatic skills and tact</li>
                    <li>Deep intuition and emotional intelligence</li>
                    <li>Natural ability to mediate conflicts</li>
                    <li>Supportive and nurturing presence</li>
                    <li>Attention to detail and patience</li>
                    <li>Gift for creating harmonious environments</li>
                </ul>
                
                <h5>Life Lessons & Challenges</h5>
                <p>Your greatest challenge is maintaining your own identity while being so attuned to others. You may struggle with:</p>
                <ul>
                    <li>Setting healthy boundaries without guilt</li>
                    <li>Overcoming excessive sensitivity to criticism</li>
                    <li>Speaking up for yourself and your needs</li>
                    <li>Avoiding codependency in relationships</li>
                </ul>
                
                <h5>Career & Purpose</h5>
                <p>You excel in roles that require diplomacy, counseling, or behind-the-scenes support. Ideal paths include therapy, mediation, human resources, partnership roles, or any career involving nurturing others.</p>
                
                <h5>Relationships</h5>
                <p>Partnership is your natural domain. You seek deep, harmonious connections and are willing to work hard to maintain them. Balance your giving nature with self-care to avoid resentment.</p>
                
                <h5>Spiritual Growth</h5>
                <p>Your spiritual journey involves learning that your sensitivity is a superpower, not a weakness. Developing self-love and boundaries allows your gifts to flow without depleting you.</p>
            `,
            affirmation: "I honor my sensitive nature while maintaining strong, healthy boundaries."
        },
        3: {
            keyword: "The Creative Communicator",
            shortDescription: "You are here to learn self-expression, creativity, and joy. Your path is about sharing your gifts and bringing light to the world through communication.",
            fullReading: `
                <h5>Core Essence</h5>
                <p>Life Path 3 individuals are the creative spirits and communicators of numerology. You possess natural charisma, artistic ability, and the gift of uplifting others through your expression. Your soul chose this lifetime to develop creativity, joy, and authentic self-expression.</p>
                
                <h5>Strengths & Gifts</h5>
                <ul>
                    <li>Natural artistic and creative talents</li>
                    <li>Excellent communication abilities</li>
                    <li>Magnetic personality and charm</li>
                    <li>Ability to inspire and uplift others</li>
                    <li>Optimistic outlook and joyful energy</li>
                    <li>Versatility and adaptability</li>
                </ul>
                
                <h5>Life Lessons & Challenges</h5>
                <p>Your greatest challenge is focusing your many talents and avoiding superficiality. You may struggle with:</p>
                <ul>
                    <li>Completing projects and maintaining focus</li>
                    <li>Handling criticism without emotional devastation</li>
                    <li>Avoiding escapism through pleasure-seeking</li>
                    <li>Developing depth beyond surface charm</li>
                </ul>
                
                <h5>Career & Purpose</h5>
                <p>You thrive in creative fields that allow self-expression. Ideal paths include writing, performing arts, teaching, marketing, design, or any career involving communication and creativity.</p>
                
                <h5>Relationships</h5>
                <p>You need a partner who appreciates your creative spirit and social nature. Avoid relationships that stifle your expression, but also develop the depth for emotional intimacy.</p>
                
                <h5>Spiritual Growth</h5>
                <p>Your spiritual journey involves using your gifts not just for entertainment but for meaningful expression that heals and inspires. Channel your creativity toward higher purposes.</p>
            `,
            affirmation: "I express my authentic creativity with joy, purpose, and depth."
        },
        4: {
            keyword: "The Master Builder",
            shortDescription: "You are here to learn discipline, stability, and the value of hard work. Your path is about building lasting foundations and practical achievements.",
            fullReading: `
                <h5>Core Essence</h5>
                <p>Life Path 4 individuals are the builders and organizers of numerology. You possess practical wisdom, strong work ethic, and the ability to turn dreams into reality through systematic effort. Your soul chose this lifetime to master discipline, structure, and creating lasting value.</p>
                
                <h5>Strengths & Gifts</h5>
                <ul>
                    <li>Exceptional organizational abilities</li>
                    <li>Strong work ethic and dedication</li>
                    <li>Practical problem-solving skills</li>
                    <li>Reliability and trustworthiness</li>
                    <li>Attention to detail and quality</li>
                    <li>Ability to create lasting structures and systems</li>
                </ul>
                
                <h5>Life Lessons & Challenges</h5>
                <p>Your greatest challenge is balancing structure with flexibility. You may struggle with:</p>
                <ul>
                    <li>Adapting to unexpected changes</li>
                    <li>Overcoming rigidity and stubbornness</li>
                    <li>Avoiding workaholism and burnout</li>
                    <li>Embracing spontaneity and play</li>
                </ul>
                
                <h5>Career & Purpose</h5>
                <p>You excel in careers requiring organization, precision, and systematic approaches. Ideal paths include engineering, accounting, project management, construction, or any field requiring methodical expertise.</p>
                
                <h5>Relationships</h5>
                <p>You offer stability and reliability in relationships. Seek partners who appreciate your solid nature while helping you embrace occasional spontaneity. Work on expressing emotions openly.</p>
                
                <h5>Spiritual Growth</h5>
                <p>Your spiritual journey involves recognizing that structure serves spirit, not replaces it. Learn to build not just material foundations but also foundations of faith and inner peace.</p>
            `,
            affirmation: "I build lasting foundations while remaining open to life's beautiful surprises."
        },
        5: {
            keyword: "The Freedom Seeker",
            shortDescription: "You are here to learn adaptability, freedom, and the constructive use of change. Your path is about experiencing life fully and embracing transformation.",
            fullReading: `
                <h5>Core Essence</h5>
                <p>Life Path 5 individuals are the adventurers and change-agents of numerology. You possess restless energy, versatility, and an insatiable curiosity about life. Your soul chose this lifetime to experience freedom, embrace change, and learn through direct experience.</p>
                
                <h5>Strengths & Gifts</h5>
                <ul>
                    <li>Remarkable adaptability and versatility</li>
                    <li>Magnetic personality and charm</li>
                    <li>Quick thinking and resourcefulness</li>
                    <li>Ability to embrace and navigate change</li>
                    <li>Natural curiosity and love of learning</li>
                    <li>Gift for making life exciting</li>
                </ul>
                
                <h5>Life Lessons & Challenges</h5>
                <p>Your greatest challenge is finding freedom within commitment. You may struggle with:</p>
                <ul>
                    <li>Maintaining focus and follow-through</li>
                    <li>Overindulgence in sensory pleasures</li>
                    <li>Fear of commitment and routine</li>
                    <li>Impatience and restlessness</li>
                </ul>
                
                <h5>Career & Purpose</h5>
                <p>You thrive in dynamic careers with variety and freedom. Ideal paths include travel industry, sales, entrepreneurship, journalism, or any field offering constant change and adventure.</p>
                
                <h5>Relationships</h5>
                <p>You need a partner who gives you space to explore while providing a secure base. Learn that true freedom includes the freedom to commit when it serves your growth.</p>
                
                <h5>Spiritual Growth</h5>
                <p>Your spiritual journey involves discovering that the ultimate freedom is internal. External adventures are meaningful when they lead to inner expansion and wisdom.</p>
            `,
            affirmation: "I embrace life's adventures while cultivating inner stability and wisdom."
        },
        6: {
            keyword: "The Nurturer & Healer",
            shortDescription: "You are here to learn responsibility, love, and service to others. Your path is about creating harmony in home and community through compassionate care.",
            fullReading: `
                <h5>Core Essence</h5>
                <p>Life Path 6 individuals are the nurturers and healers of numerology. You possess deep compassion, aesthetic sense, and a strong drive to care for others. Your soul chose this lifetime to master unconditional love, responsibility, and service.</p>
                
                <h5>Strengths & Gifts</h5>
                <ul>
                    <li>Deep capacity for love and compassion</li>
                    <li>Natural healing abilities</li>
                    <li>Strong sense of responsibility</li>
                    <li>Artistic and aesthetic sensibilities</li>
                    <li>Ability to create harmonious environments</li>
                    <li>Gift for counseling and nurturing</li>
                </ul>
                
                <h5>Life Lessons & Challenges</h5>
                <p>Your greatest challenge is balancing care for others with self-care. You may struggle with:</p>
                <ul>
                    <li>Perfectionism and unrealistic expectations</li>
                    <li>Becoming controlling in the name of caring</li>
                    <li>Neglecting your own needs for others</li>
                    <li>Codependency and over-responsibility</li>
                </ul>
                
                <h5>Career & Purpose</h5>
                <p>You excel in careers involving caring, healing, or beautifying. Ideal paths include healthcare, counseling, teaching, design, or any role that allows you to nurture and improve lives.</p>
                
                <h5>Relationships</h5>
                <p>Family and home are central to your happiness. You create beautiful, loving environments but must avoid martyrdom. Seek relationships of mutual caring, not rescuing.</p>
                
                <h5>Spiritual Growth</h5>
                <p>Your spiritual journey involves learning that the greatest service begins with self-love. Your caring nature flourishes when rooted in healthy self-respect and boundaries.</p>
            `,
            affirmation: "I nurture others from a foundation of self-love and healthy boundaries."
        },
        7: {
            keyword: "The Seeker & Mystic",
            shortDescription: "You are here to learn wisdom, introspection, and spiritual understanding. Your path is about seeking truth beneath the surface of things.",
            fullReading: `
                <h5>Core Essence</h5>
                <p>Life Path 7 individuals are the seekers and mystics of numerology. You possess deep analytical abilities, spiritual inclinations, and an unquenchable thirst for truth and understanding. Your soul chose this lifetime to develop wisdom, intuition, and inner knowing.</p>
                
                <h5>Strengths & Gifts</h5>
                <ul>
                    <li>Profound analytical and research abilities</li>
                    <li>Strong intuition and psychic sensitivity</li>
                    <li>Ability to see beneath surface appearances</li>
                    <li>Natural inclination toward spirituality</li>
                    <li>Deep thinking and philosophical mind</li>
                    <li>Gift for uncovering hidden truths</li>
                </ul>
                
                <h5>Life Lessons & Challenges</h5>
                <p>Your greatest challenge is bridging the inner and outer worlds. You may struggle with:</p>
                <ul>
                    <li>Excessive isolation and withdrawal</li>
                    <li>Over-intellectualizing emotions</li>
                    <li>Cynicism and distrust of others</li>
                    <li>Difficulty with practical matters</li>
                </ul>
                
                <h5>Career & Purpose</h5>
                <p>You thrive in careers requiring research, analysis, or spiritual pursuits. Ideal paths include science, psychology, spiritual teaching, research, or any field demanding depth of understanding.</p>
                
                <h5>Relationships</h5>
                <p>You need space for solitude and contemplation. Seek a partner who respects your need for privacy while gently encouraging connection. Quality matters more than quantity in all relationships.</p>
                
                <h5>Spiritual Growth</h5>
                <p>Your spiritual journey is central to your life path. You're here to develop wisdom and share it. Balance intellectual understanding with direct spiritual experience.</p>
            `,
            affirmation: "I trust my inner wisdom while remaining open to life's mysterious teachings."
        },
        8: {
            keyword: "The Powerhouse & Achiever",
            shortDescription: "You are here to learn mastery of the material world while developing spiritual integrity. Your path is about power, abundance, and karmic balance.",
            fullReading: `
                <h5>Core Essence</h5>
                <p>Life Path 8 individuals are the powerhouses and achievers of numerology. You possess strong business acumen, leadership abilities, and the potential for significant material success. Your soul chose this lifetime to master personal power, abundance, and the spiritual lessons of the material world.</p>
                
                <h5>Strengths & Gifts</h5>
                <ul>
                    <li>Natural business and leadership abilities</li>
                    <li>Strong organizational and management skills</li>
                    <li>Ability to manifest material abundance</li>
                    <li>Resilience and determination</li>
                    <li>Good judgment and practical wisdom</li>
                    <li>Gift for seeing the big picture</li>
                </ul>
                
                <h5>Life Lessons & Challenges</h5>
                <p>Your greatest challenge is using power wisely and ethically. You may struggle with:</p>
                <ul>
                    <li>Balancing material success with spiritual values</li>
                    <li>Overcoming tendencies toward workaholism</li>
                    <li>Handling power without becoming domineering</li>
                    <li>Understanding that karma applies to all actions</li>
                </ul>
                
                <h5>Career & Purpose</h5>
                <p>You excel in positions of authority and business leadership. Ideal paths include executive roles, entrepreneurship, finance, law, or any field where you can exercise power and create abundance.</p>
                
                <h5>Relationships</h5>
                <p>You need a partner who is your equal and can handle your intensity. Avoid power struggles by practicing vulnerability. Success in relationships requires as much effort as business success.</p>
                
                <h5>Spiritual Growth</h5>
                <p>Your spiritual journey involves learning that true power is spiritual, not material. Use your gifts to create abundance that serves the greater good, not just personal gain.</p>
            `,
            affirmation: "I use my power and abundance to create positive change in the world."
        },
        9: {
            keyword: "The Humanitarian & Sage",
            shortDescription: "You are here to learn universal love, completion, and selfless service. Your path is about compassion for all humanity and letting go of personal attachments.",
            fullReading: `
                <h5>Core Essence</h5>
                <p>Life Path 9 individuals are the humanitarians and sages of numerology. You possess broad vision, creative talents, and deep compassion for humanity. Your soul chose this lifetime to develop universal love, wisdom through completion, and selfless service.</p>
                
                <h5>Strengths & Gifts</h5>
                <ul>
                    <li>Deep compassion and humanitarian spirit</li>
                    <li>Broad, inclusive perspective</li>
                    <li>Artistic and creative abilities</li>
                    <li>Wisdom gained through diverse experiences</li>
                    <li>Natural teaching and healing abilities</li>
                    <li>Gift for inspiring others toward higher ideals</li>
                </ul>
                
                <h5>Life Lessons & Challenges</h5>
                <p>Your greatest challenge is releasing attachments and personal agendas. You may struggle with:</p>
                <ul>
                    <li>Letting go of past hurts and relationships</li>
                    <li>Avoiding self-righteousness in idealism</li>
                    <li>Balancing universal love with personal relationships</li>
                    <li>Learning the lesson of endings and closure</li>
                </ul>
                
                <h5>Career & Purpose</h5>
                <p>You thrive in careers that serve humanity. Ideal paths include social work, counseling, arts, teaching, or any field where you can make a positive difference in the world.</p>
                
                <h5>Relationships</h5>
                <p>You love deeply but broadly. Personal relationships may feel limiting unless you find a partner who shares your humanitarian vision. Practice presence and attention in intimate connections.</p>
                
                <h5>Spiritual Growth</h5>
                <p>Your spiritual journey involves embracing endings as new beginnings and serving without attachment to outcomes. You're completing a major soul cycle with profound lessons of release and universal love.</p>
            `,
            affirmation: "I serve humanity with love, releasing attachment to outcomes."
        },
        11: {
            keyword: "The Spiritual Messenger (Master Number)",
            shortDescription: "You are here as a spiritual messenger and intuitive channel. Your master path combines the sensitivity of 2 with higher spiritual purpose.",
            fullReading: `
                <h5>Core Essence - Master Number 11</h5>
                <p>As a Master Number 11, you carry exceptional spiritual gifts and responsibilities. You possess heightened intuition, visionary abilities, and the potential to inspire and illuminate others. Your soul chose this challenging path to serve as a bridge between the spiritual and material worlds.</p>
                
                <h5>Master Number Significance</h5>
                <p>The 11 is called the "Spiritual Messenger" or "Illuminator." You have access to higher realms of consciousness and are meant to channel spiritual insights into practical applications. This is not an easy path—it demands that you live up to your highest potential.</p>
                
                <h5>Strengths & Gifts</h5>
                <ul>
                    <li>Powerful intuition and psychic abilities</li>
                    <li>Visionary insight and inspiration</li>
                    <li>Ability to inspire and uplift masses</li>
                    <li>Deep spiritual understanding</li>
                    <li>Charisma and magnetic presence</li>
                    <li>Creative genius when aligned with purpose</li>
                </ul>
                
                <h5>Life Lessons & Challenges</h5>
                <p>Master Numbers carry master challenges. You may struggle with:</p>
                <ul>
                    <li>Extreme nervous tension and anxiety</li>
                    <li>Feeling misunderstood or out of place</li>
                    <li>Living up to your enormous potential</li>
                    <li>Grounding spiritual visions in reality</li>
                    <li>Avoiding escapism through fantasy or addiction</li>
                </ul>
                
                <h5>Career & Purpose</h5>
                <p>You're meant for work that inspires and illuminates. Ideal paths include spiritual teaching, counseling, artistic expression, motivational speaking, or any platform where your light can reach many.</p>
                
                <h5>Relationships</h5>
                <p>You need a partner who understands your spiritual nature and supports your mission. Ordinary relationships may feel unfulfilling—you need a soul-level connection.</p>
                
                <h5>Spiritual Growth</h5>
                <p>Your entire life is a spiritual journey. The challenge is staying grounded while channeling higher energies. Daily spiritual practice is essential for your wellbeing and purpose fulfillment.</p>
            `,
            affirmation: "I am a clear channel for spiritual wisdom, grounded in love and service."
        },
        22: {
            keyword: "The Master Builder (Master Number)",
            shortDescription: "You are here as a master builder capable of manifesting grand visions. Your master path combines the practicality of 4 with visionary power.",
            fullReading: `
                <h5>Core Essence - Master Number 22</h5>
                <p>As a Master Number 22, you possess the rare ability to transform the most ambitious dreams into tangible reality. You combine practical mastery with visionary scope, making you capable of achievements that benefit humanity. This is considered the most powerful of all numbers in numerology.</p>
                
                <h5>Master Number Significance</h5>
                <p>The 22 is called the "Master Builder" or "Master Architect." You have the potential to build lasting legacies—institutions, systems, or structures that serve humanity for generations. This tremendous potential comes with equally tremendous responsibility.</p>
                
                <h5>Strengths & Gifts</h5>
                <ul>
                    <li>Ability to manifest grand visions into reality</li>
                    <li>Exceptional organizational and leadership skills</li>
                    <li>Practical wisdom combined with inspiration</li>
                    <li>Capacity to work on large-scale projects</li>
                    <li>Natural authority and presence</li>
                    <li>Gift for seeing both details and big picture</li>
                </ul>
                
                <h5>Life Lessons & Challenges</h5>
                <p>The 22's challenges match its potential:</p>
                <ul>
                    <li>Enormous pressure from inner potential</li>
                    <li>Frustration when reality doesn't match vision</li>
                    <li>Tendency to become overwhelmed by scope</li>
                    <li>Workaholism and neglect of personal life</li>
                    <li>Difficulty delegating or trusting others</li>
                </ul>
                
                <h5>Career & Purpose</h5>
                <p>You're meant for significant achievement that serves the collective good. Ideal paths include architecture, engineering, international organizations, large-scale entrepreneurship, or any field where you can build lasting structures.</p>
                
                <h5>Relationships</h5>
                <p>You need a partner who can support your mission without feeling secondary. Your work often takes precedence, so finding someone who shares your vision or has their own significant purpose is essential.</p>
                
                <h5>Spiritual Growth</h5>
                <p>Your spiritual journey involves recognizing that building for humanity IS your spiritual practice. Every practical achievement, when aligned with higher purpose, is sacred work.</p>
            `,
            affirmation: "I manifest my grandest visions into reality for the benefit of all."
        },
        33: {
            keyword: "The Master Teacher (Master Number)",
            shortDescription: "You are here as a master teacher and healer of humanity. Your master path combines the nurturing of 6 with cosmic love and wisdom.",
            fullReading: `
                <h5>Core Essence - Master Number 33</h5>
                <p>As a Master Number 33, you embody the highest form of love and service. You are a master healer and teacher, capable of profound influence through compassion and wisdom. This is the rarest and most spiritually significant of all life path numbers.</p>
                
                <h5>Master Number Significance</h5>
                <p>The 33 is called the "Master Teacher" or "Master Healer." You have the potential to uplift humanity through selfless love and spiritual teaching. Many 33s serve quietly, but their influence is profound and far-reaching. This path requires exceptional spiritual maturity.</p>
                
                <h5>Strengths & Gifts</h5>
                <ul>
                    <li>Profound healing presence and abilities</li>
                    <li>Capacity for unconditional love</li>
                    <li>Natural teaching and mentoring gifts</li>
                    <li>Ability to inspire through example</li>
                    <li>Deep wisdom and spiritual insight</li>
                    <li>Gift for healing emotional and spiritual wounds</li>
                </ul>
                
                <h5>Life Lessons & Challenges</h5>
                <p>The 33's challenges are significant:</p>
                <ul>
                    <li>Tendency toward martyrdom and self-sacrifice</li>
                    <li>Taking on others' pain and suffering</li>
                    <li>Difficulty maintaining personal boundaries</li>
                    <li>Feeling responsible for healing the world</li>
                    <li>Burnout from giving too much</li>
                </ul>
                
                <h5>Career & Purpose</h5>
                <p>You're meant for healing and teaching in whatever form it takes. Ideal paths include spiritual teaching, healing arts, counseling, humanitarian work, or any role where you can elevate human consciousness.</p>
                
                <h5>Relationships</h5>
                <p>You love deeply and need a partner who can receive your love without being overwhelmed by it. Finding someone with their own spiritual depth is essential for a balanced relationship.</p>
                
                <h5>Spiritual Growth</h5>
                <p>Your life is a spiritual mission. The key learning is that you cannot heal others at the expense of yourself. Your highest service comes from a place of fullness, not depletion.</p>
            `,
            affirmation: "I embody divine love, teaching through presence and serving from wholeness."
        }
    },

    // ================================
    // DESTINY NUMBER READINGS
    // ================================
    destinyReadings: {
        1: {
            keyword: "Pioneer of New Paths",
            shortDescription: "Your destiny calls you to lead, innovate, and forge new paths for others to follow.",
            fullReading: `
                <h5>Your Destiny Purpose</h5>
                <p>Your Destiny Number 1 indicates that you came into this life to develop and express independence, leadership, and originality. You are destined to be a pioneer, someone who initiates new ways of thinking and doing.</p>
                
                <h5>How Your Destiny Unfolds</h5>
                <p>Throughout your life, you'll be placed in situations that require you to take charge, make independent decisions, and trust your own judgment. Even if you feel shy or uncertain, life will continually push you toward leadership roles.</p>
                
                <h5>Fulfilling Your Destiny</h5>
                <ul>
                    <li>Embrace opportunities to lead, even when uncomfortable</li>
                    <li>Develop and trust your original ideas</li>
                    <li>Start new projects and enterprises</li>
                    <li>Be willing to stand alone for what you believe</li>
                    <li>Use your individuality to inspire others</li>
                </ul>
                
                <h5>Potential Pitfalls</h5>
                <p>If you resist your destiny, you may become dependent on others, afraid to take initiative, or aggressive in asserting yourself. The key is conscious, balanced leadership that empowers rather than dominates.</p>
            `
        },
        2: {
            keyword: "Master of Cooperation",
            shortDescription: "Your destiny calls you to bring harmony, support others, and master the art of partnership.",
            fullReading: `
                <h5>Your Destiny Purpose</h5>
                <p>Your Destiny Number 2 indicates that you came into this life to develop cooperation, diplomacy, and the ability to work harmoniously with others. You are destined to be a peacemaker and supporter of great endeavors.</p>
                
                <h5>How Your Destiny Unfolds</h5>
                <p>Life will repeatedly place you in situations requiring patience, tact, and the ability to see both sides. You'll be called to mediate conflicts, support others' success, and create harmony wherever you go.</p>
                
                <h5>Fulfilling Your Destiny</h5>
                <ul>
                    <li>Develop your diplomatic and counseling abilities</li>
                    <li>Learn to support others without losing yourself</li>
                    <li>Use your intuition in relationships and work</li>
                    <li>Create beauty and harmony in your environment</li>
                    <li>Master the art of listening and understanding</li>
                </ul>
                
                <h5>Potential Pitfalls</h5>
                <p>If you resist your destiny, you may become overly dependent, resentful of supporting roles, or passive-aggressive. The key is finding strength in sensitivity and power in partnership.</p>
            `
        },
        3: {
            keyword: "Voice of Inspiration",
            shortDescription: "Your destiny calls you to express yourself creatively and inspire others through communication.",
            fullReading: `
                <h5>Your Destiny Purpose</h5>
                <p>Your Destiny Number 3 indicates that you came into this life to develop creative self-expression and the ability to inspire others. You are destined to communicate, create, and bring joy to the world.</p>
                
                <h5>How Your Destiny Unfolds</h5>
                <p>Life will continually offer you stages, platforms, and opportunities for creative expression. Whether through words, art, or presence, you're meant to share your unique perspective with the world.</p>
                
                <h5>Fulfilling Your Destiny</h5>
                <ul>
                    <li>Develop your creative and artistic talents</li>
                    <li>Learn to express yourself authentically</li>
                    <li>Use your natural charisma to uplift others</li>
                    <li>Find constructive outlets for your energy</li>
                    <li>Balance lightness with depth in your expression</li>
                </ul>
                
                <h5>Potential Pitfalls</h5>
                <p>If you resist your destiny, you may become scattered, superficial, or use your gifts for mere entertainment rather than inspiration. The key is using your creativity with intention and depth.</p>
            `
        },
        4: {
            keyword: "Builder of Foundations",
            shortDescription: "Your destiny calls you to build lasting structures and create order from chaos.",
            fullReading: `
                <h5>Your Destiny Purpose</h5>
                <p>Your Destiny Number 4 indicates that you came into this life to build, organize, and create lasting value through disciplined effort. You are destined to create foundations that others can build upon.</p>
                
                <h5>How Your Destiny Unfolds</h5>
                <p>Life will present you with situations requiring patience, hard work, and systematic approaches. You'll be called to bring order to chaos and create structures that endure.</p>
                
                <h5>Fulfilling Your Destiny</h5>
                <ul>
                    <li>Develop practical skills and expertise</li>
                    <li>Create systems and processes that work</li>
                    <li>Build things meant to last</li>
                    <li>Apply discipline to achieve your goals</li>
                    <li>Find satisfaction in steady progress</li>
                </ul>
                
                <h5>Potential Pitfalls</h5>
                <p>If you resist your destiny, you may become rigid, workaholic, or resentful of limitations. The key is finding freedom through structure and creativity within boundaries.</p>
            `
        },
        5: {
            keyword: "Agent of Change",
            shortDescription: "Your destiny calls you to embrace change, seek freedom, and help others adapt to transformation.",
            fullReading: `
                <h5>Your Destiny Purpose</h5>
                <p>Your Destiny Number 5 indicates that you came into this life to experience freedom, adapt to change, and help others navigate transitions. You are destined to live fully and inspire others to embrace life's variety.</p>
                
                <h5>How Your Destiny Unfolds</h5>
                <p>Life will offer you tremendous variety and constant change. You'll be called to adapt, explore, and demonstrate that change can be positive and growth-promoting.</p>
                
                <h5>Fulfilling Your Destiny</h5>
                <ul>
                    <li>Embrace variety and new experiences</li>
                    <li>Develop adaptability as a strength</li>
                    <li>Use freedom responsibly and consciously</li>
                    <li>Help others navigate change</li>
                    <li>Find commitment that doesn't cage you</li>
                </ul>
                
                <h5>Potential Pitfalls</h5>
                <p>If you resist your destiny, you may become stuck in routine or escape into excess. The key is constructive freedom that leads to growth, not just stimulation.</p>
            `
        },
        6: {
            keyword: "Heart of Service",
            shortDescription: "Your destiny calls you to serve, heal, and create harmony in family and community.",
            fullReading: `
                <h5>Your Destiny Purpose</h5>
                <p>Your Destiny Number 6 indicates that you came into this life to develop responsibility, service, and the capacity to create harmony. You are destined to care for others and beautify the world.</p>
                
                <h5>How Your Destiny Unfolds</h5>
                <p>Life will consistently call you to take responsibility, care for others, and create beauty and harmony. Family, community, and service will be central themes.</p>
                
                <h5>Fulfilling Your Destiny</h5>
                <ul>
                    <li>Develop your nurturing and healing abilities</li>
                    <li>Create beautiful, harmonious environments</li>
                    <li>Serve without martyrdom or control</li>
                    <li>Balance care for others with self-care</li>
                    <li>Use your aesthetic sense to uplift</li>
                </ul>
                
                <h5>Potential Pitfalls</h5>
                <p>If you resist your destiny, you may become controlling, perfectionist, or neglectful of yourself. The key is service that flows from fullness, not obligation.</p>
            `
        },
        7: {
            keyword: "Seeker of Truth",
            shortDescription: "Your destiny calls you to seek wisdom, develop intuition, and share spiritual insights.",
            fullReading: `
                <h5>Your Destiny Purpose</h5>
                <p>Your Destiny Number 7 indicates that you came into this life to develop wisdom, intuition, and spiritual understanding. You are destined to seek truth and share your insights with others.</p>
                
                <h5>How Your Destiny Unfolds</h5>
                <p>Life will present you with mysteries to solve, knowledge to gain, and spiritual depths to explore. Solitude and contemplation will be necessary parts of your journey.</p>
                
                <h5>Fulfilling Your Destiny</h5>
                <ul>
                    <li>Develop your analytical and intuitive abilities</li>
                    <li>Pursue knowledge and spiritual wisdom</li>
                    <li>Honor your need for solitude and reflection</li>
                    <li>Share your insights with discernment</li>
                    <li>Bridge the intellectual and spiritual</li>
                </ul>
                
                <h5>Potential Pitfalls</h5>
                <p>If you resist your destiny, you may become isolated, cynical, or lost in intellectual escapism. The key is wisdom that connects rather than separates.</p>
            `
        },
        8: {
            keyword: "Master of Manifestation",
            shortDescription: "Your destiny calls you to master abundance, power, and material achievement with integrity.",
            fullReading: `
                <h5>Your Destiny Purpose</h5>
                <p>Your Destiny Number 8 indicates that you came into this life to master personal power, achieve material success, and learn the spiritual lessons of abundance. You are destined for achievement that serves the greater good.</p>
                
                <h5>How Your Destiny Unfolds</h5>
                <p>Life will offer you opportunities for power, wealth, and recognition. You'll also face karmic lessons about how you use these gifts. Success and failure may both be part of your journey.</p>
                
                <h5>Fulfilling Your Destiny</h5>
                <ul>
                    <li>Develop your business and leadership abilities</li>
                    <li>Pursue success with integrity</li>
                    <li>Learn to handle power wisely</li>
                    <li>Use abundance to benefit others</li>
                    <li>Balance material and spiritual wealth</li>
                </ul>
                
                <h5>Potential Pitfalls</h5>
                <p>If you resist your destiny, you may become materialistic, power-hungry, or afraid of your own potential. The key is ethical achievement that creates value for all.</p>
            `
        },
        9: {
            keyword: "Servant of Humanity",
            shortDescription: "Your destiny calls you to serve humanity with compassion and release personal attachments.",
            fullReading: `
                <h5>Your Destiny Purpose</h5>
                <p>Your Destiny Number 9 indicates that you came into this life to develop universal compassion, complete karmic cycles, and serve humanity selflessly. You are destined to give to the world without counting the cost.</p>
                
                <h5>How Your Destiny Unfolds</h5>
                <p>Life will teach you through experiences of loss, completion, and service. You'll be called to let go of the personal to serve the universal, finding fulfillment in giving.</p>
                
                <h5>Fulfilling Your Destiny</h5>
                <ul>
                    <li>Develop compassion for all beings</li>
                    <li>Learn to release attachment gracefully</li>
                    <li>Serve causes larger than yourself</li>
                    <li>Transform personal pain into universal wisdom</li>
                    <li>Complete what you start with grace</li>
                </ul>
                
                <h5>Potential Pitfalls</h5>
                <p>If you resist your destiny, you may become attached, self-righteous, or burdened by past hurts. The key is generous release that opens space for new blessings.</p>
            `
        },
        11: {
            keyword: "Illuminator of Paths",
            shortDescription: "Your master destiny calls you to inspire and illuminate through spiritual insight and visionary leadership.",
            fullReading: `
                <h5>Your Master Destiny Purpose</h5>
                <p>Your Master Destiny Number 11 indicates you came to be a spiritual beacon, illuminating paths for others through your intuitive gifts and visionary nature. You carry the responsibility of a master teacher and inspirational leader.</p>
                
                <h5>How Your Master Destiny Unfolds</h5>
                <p>Life will amplify your sensitivity and spiritual experiences. You'll face the choice of living at the higher vibration of 11 or defaulting to 2's lessons. The universe will continually call you upward.</p>
                
                <h5>Fulfilling Your Master Destiny</h5>
                <ul>
                    <li>Develop and trust your spiritual gifts</li>
                    <li>Use your vision to inspire others</li>
                    <li>Channel higher wisdom into practical form</li>
                    <li>Maintain spiritual practices for grounding</li>
                    <li>Accept your role as a light for others</li>
                </ul>
            `
        },
        22: {
            keyword: "Architect of Dreams",
            shortDescription: "Your master destiny calls you to manifest grand visions that serve humanity's evolution.",
            fullReading: `
                <h5>Your Master Destiny Purpose</h5>
                <p>Your Master Destiny Number 22 indicates you came to build structures—physical, organizational, or conceptual—that serve humanity for generations. You carry the most powerful manifestation potential in numerology.</p>
                
                <h5>How Your Master Destiny Unfolds</h5>
                <p>Life will present you with enormous challenges and opportunities. You'll be tested on your ability to turn the most ambitious dreams into reality. Patience and persistence are essential.</p>
                
                <h5>Fulfilling Your Master Destiny</h5>
                <ul>
                    <li>Think big and plan thoroughly</li>
                    <li>Build for the benefit of humanity</li>
                    <li>Master both vision and practical skills</li>
                    <li>Accept that your work may not complete in your lifetime</li>
                    <li>Lead by creating lasting value</li>
                </ul>
            `
        },
        33: {
            keyword: "Channel of Divine Love",
            shortDescription: "Your master destiny calls you to embody and teach unconditional love as a healer of humanity.",
            fullReading: `
                <h5>Your Master Destiny Purpose</h5>
                <p>Your Master Destiny Number 33 indicates you came to be a master teacher and healer, channeling divine love to uplift human consciousness. This is the destiny of the great spiritual teachers and healers.</p>
                
                <h5>How Your Master Destiny Unfolds</h5>
                <p>Life will continually deepen your capacity for love and call you to serve through healing and teaching. You'll face the challenge of maintaining your own wholeness while giving so much.</p>
                
                <h5>Fulfilling Your Master Destiny</h5>
                <ul>
                    <li>Embody unconditional love in all relationships</li>
                    <li>Teach through your presence and example</li>
                    <li>Heal without depleting yourself</li>
                    <li>Maintain your own spiritual practice</li>
                    <li>Trust that your love reaches far beyond what you see</li>
                </ul>
            `
        }
    },

    // ================================
    // SOUL URGE NUMBER READINGS
    // ================================
    soulUrgeReadings: {
        1: {
            keyword: "Desire for Independence",
            shortDescription: "Your heart yearns for independence, recognition, and the freedom to lead your own life.",
            fullReading: `
                <h5>Your Heart's Deepest Desire</h5>
                <p>With Soul Urge 1, your innermost self craves independence, achievement, and the recognition of your individual worth. You have a deep need to be first, to be recognized as unique, and to make your mark on the world.</p>
                
                <h5>What Truly Motivates You</h5>
                <p>At your core, you're motivated by the desire to stand out, to lead, and to be acknowledged for your individual contributions. You feel most alive when you're pioneering new territory.</p>
                
                <h5>Secret Dreams</h5>
                <ul>
                    <li>To be recognized as uniquely talented</li>
                    <li>To achieve something no one else has done</li>
                    <li>To have complete autonomy over your life</li>
                    <li>To be admired for your strength and courage</li>
                </ul>
                
                <h5>Emotional Fulfillment</h5>
                <p>You find deepest satisfaction when you're achieving your goals independently, receiving recognition for your efforts, and feeling that you're living life on your own terms.</p>
            `
        },
        2: {
            keyword: "Desire for Love & Peace",
            shortDescription: "Your heart yearns for deep connection, harmony, and to be truly seen and appreciated.",
            fullReading: `
                <h5>Your Heart's Deepest Desire</h5>
                <p>With Soul Urge 2, your innermost self craves love, partnership, and peaceful harmony. You have a deep need to connect with others on an intimate level and to feel truly appreciated for your sensitivity.</p>
                
                <h5>What Truly Motivates You</h5>
                <p>At your core, you're motivated by the desire for meaningful relationships, emotional security, and the knowledge that you're valued. You feel most alive in harmonious connections.</p>
                
                <h5>Secret Dreams</h5>
                <ul>
                    <li>To experience a soul-deep romantic connection</li>
                    <li>To create perfect harmony in your environment</li>
                    <li>To be appreciated for your gentle nature</li>
                    <li>To belong to a loving community</li>
                </ul>
                
                <h5>Emotional Fulfillment</h5>
                <p>You find deepest satisfaction in close, harmonious relationships where you feel truly seen and valued for who you are at the deepest level.</p>
            `
        },
        3: {
            keyword: "Desire for Expression",
            shortDescription: "Your heart yearns to express yourself creatively and to experience joy and celebration.",
            fullReading: `
                <h5>Your Heart's Deepest Desire</h5>
                <p>With Soul Urge 3, your innermost self craves creative expression, joy, and the pleasure of sharing your unique perspective with the world. You have a deep need to be heard, seen, and appreciated for your creativity.</p>
                
                <h5>What Truly Motivates You</h5>
                <p>At your core, you're motivated by the desire to express your inner world, to experience and spread joy, and to feel that your creative gifts are valued. You feel most alive when creating.</p>
                
                <h5>Secret Dreams</h5>
                <ul>
                    <li>To create something truly beautiful</li>
                    <li>To be celebrated for your creative gifts</li>
                    <li>To live a life full of joy and pleasure</li>
                    <li>To inspire others through your expression</li>
                </ul>
                
                <h5>Emotional Fulfillment</h5>
                <p>You find deepest satisfaction when you're expressing yourself authentically, when your creativity is appreciated, and when life feels like a celebration of beauty and joy.</p>
            `
        },
        4: {
            keyword: "Desire for Security",
            shortDescription: "Your heart yearns for stability, order, and the satisfaction of building something lasting.",
            fullReading: `
                <h5>Your Heart's Deepest Desire</h5>
                <p>With Soul Urge 4, your innermost self craves security, stability, and the sense of having built something of lasting value. You have a deep need for order, structure, and knowing that your efforts matter.</p>
                
                <h5>What Truly Motivates You</h5>
                <p>At your core, you're motivated by the desire for a solid foundation, whether financial, relational, or spiritual. You feel most at peace when life is orderly and secure.</p>
                
                <h5>Secret Dreams</h5>
                <ul>
                    <li>To achieve complete financial security</li>
                    <li>To build something that lasts beyond you</li>
                    <li>To be respected for your reliability</li>
                    <li>To create a perfectly organized life</li>
                </ul>
                
                <h5>Emotional Fulfillment</h5>
                <p>You find deepest satisfaction when you've created stability, when your hard work is recognized, and when you can see the tangible results of your disciplined efforts.</p>
            `
        },
        5: {
            keyword: "Desire for Freedom",
            shortDescription: "Your heart yearns for adventure, variety, and the freedom to experience all that life offers.",
            fullReading: `
                <h5>Your Heart's Deepest Desire</h5>
                <p>With Soul Urge 5, your innermost self craves freedom, adventure, and sensory experience. You have a deep need to feel unrestricted, to explore, and to taste all of life's offerings.</p>
                
                <h5>What Truly Motivates You</h5>
                <p>At your core, you're motivated by the desire for new experiences, personal freedom, and the excitement of change. You feel most alive when you're exploring new territory.</p>
                
                <h5>Secret Dreams</h5>
                <ul>
                    <li>To travel the world freely</li>
                    <li>To experience everything life has to offer</li>
                    <li>To never feel trapped or limited</li>
                    <li>To live on your own terms completely</li>
                </ul>
                
                <h5>Emotional Fulfillment</h5>
                <p>You find deepest satisfaction when you feel free, when life is full of variety and adventure, and when you're not bound by excessive restrictions or routines.</p>
            `
        },
        6: {
            keyword: "Desire to Nurture",
            shortDescription: "Your heart yearns to love, nurture, and create a beautiful, harmonious home and family.",
            fullReading: `
                <h5>Your Heart's Deepest Desire</h5>
                <p>With Soul Urge 6, your innermost self craves to love and be loved within a beautiful, harmonious environment. You have a deep need to nurture, to create beauty, and to feel that you're taking care of those you love.</p>
                
                <h5>What Truly Motivates You</h5>
                <p>At your core, you're motivated by the desire to create harmony, to care for others, and to live surrounded by beauty. You feel most fulfilled when your loved ones are happy.</p>
                
                <h5>Secret Dreams</h5>
                <ul>
                    <li>To have a perfect, loving family</li>
                    <li>To live in a beautiful home</li>
                    <li>To be appreciated for your devotion</li>
                    <li>To heal and help those in need</li>
                </ul>
                
                <h5>Emotional Fulfillment</h5>
                <p>You find deepest satisfaction when your home is harmonious, when you're caring for loved ones, and when you're surrounded by beauty you've helped create.</p>
            `
        },
        7: {
            keyword: "Desire for Understanding",
            shortDescription: "Your heart yearns for deep knowledge, spiritual truth, and inner peace through understanding.",
            fullReading: `
                <h5>Your Heart's Deepest Desire</h5>
                <p>With Soul Urge 7, your innermost self craves understanding—of life's mysteries, spiritual truths, and the deeper meaning beneath surface reality. You have a deep need for inner peace through wisdom.</p>
                
                <h5>What Truly Motivates You</h5>
                <p>At your core, you're motivated by the desire to understand, to find truth, and to achieve inner peace through knowledge. You feel most at home in contemplation and study.</p>
                
                <h5>Secret Dreams</h5>
                <ul>
                    <li>To understand life's deepest mysteries</li>
                    <li>To achieve spiritual enlightenment</li>
                    <li>To live in peaceful solitude with your thoughts</li>
                    <li>To be recognized for your wisdom</li>
                </ul>
                
                <h5>Emotional Fulfillment</h5>
                <p>You find deepest satisfaction in moments of insight, when you've understood something profound, and when you can retreat into peaceful contemplation.</p>
            `
        },
        8: {
            keyword: "Desire for Achievement",
            shortDescription: "Your heart yearns for material success, recognition, and the power to make things happen.",
            fullReading: `
                <h5>Your Heart's Deepest Desire</h5>
                <p>With Soul Urge 8, your innermost self craves achievement, recognition, and the power that comes with success. You have a deep need to accomplish something significant and to be recognized for your achievements.</p>
                
                <h5>What Truly Motivates You</h5>
                <p>At your core, you're motivated by the desire for success, power, and material abundance. You feel most alive when you're achieving and being recognized for your accomplishments.</p>
                
                <h5>Secret Dreams</h5>
                <ul>
                    <li>To achieve great wealth and success</li>
                    <li>To be powerful and influential</li>
                    <li>To be respected as a leader</li>
                    <li>To leave a legacy of achievement</li>
                </ul>
                
                <h5>Emotional Fulfillment</h5>
                <p>You find deepest satisfaction when you've achieved your goals, when you're financially secure, and when your success is recognized and respected.</p>
            `
        },
        9: {
            keyword: "Desire to Serve Humanity",
            shortDescription: "Your heart yearns to make a difference in the world and to love unconditionally.",
            fullReading: `
                <h5>Your Heart's Deepest Desire</h5>
                <p>With Soul Urge 9, your innermost self craves to make a meaningful difference in the world through compassion and service. You have a deep need to love broadly and to contribute to human welfare.</p>
                
                <h5>What Truly Motivates You</h5>
                <p>At your core, you're motivated by the desire to serve, to help, and to love without boundaries. You feel most fulfilled when you're contributing to something larger than yourself.</p>
                
                <h5>Secret Dreams</h5>
                <ul>
                    <li>To make the world a better place</li>
                    <li>To be remembered for your contributions</li>
                    <li>To love without conditions or limits</li>
                    <li>To transform suffering into wisdom</li>
                </ul>
                
                <h5>Emotional Fulfillment</h5>
                <p>You find deepest satisfaction when you're helping others, when you see your efforts making a difference, and when you feel connected to all of humanity.</p>
            `
        },
        11: {
            keyword: "Desire for Spiritual Illumination",
            shortDescription: "Your heart yearns for spiritual enlightenment and to inspire others toward higher consciousness.",
            fullReading: `
                <h5>Your Heart's Deepest Desire</h5>
                <p>With Master Soul Urge 11, your innermost self craves spiritual illumination and the ability to inspire others toward higher awareness. You have a deep need to channel spiritual insights and to live as a beacon of light.</p>
                
                <h5>What Truly Motivates You</h5>
                <p>At your core, you're motivated by spiritual truth, intuitive knowing, and the desire to elevate consciousness. You feel most alive when you're connected to higher realms.</p>
                
                <h5>Secret Dreams</h5>
                <ul>
                    <li>To achieve spiritual enlightenment</li>
                    <li>To inspire others toward awakening</li>
                    <li>To live a divinely guided life</li>
                    <li>To channel higher wisdom</li>
                </ul>
            `
        },
        22: {
            keyword: "Desire to Build a Legacy",
            shortDescription: "Your heart yearns to create something monumental that serves humanity for generations.",
            fullReading: `
                <h5>Your Heart's Deepest Desire</h5>
                <p>With Master Soul Urge 22, your innermost self craves to build something of lasting significance that serves humanity. You have a deep need to manifest grand visions into reality.</p>
                
                <h5>What Truly Motivates You</h5>
                <p>At your core, you're motivated by the desire to create lasting structures, to leave a meaningful legacy, and to know your work will endure. You feel most fulfilled when building.</p>
                
                <h5>Secret Dreams</h5>
                <ul>
                    <li>To create something that lasts for generations</li>
                    <li>To manifest the most ambitious visions</li>
                    <li>To be recognized as a master builder</li>
                    <li>To serve humanity through practical achievement</li>
                </ul>
            `
        },
        33: {
            keyword: "Desire for Universal Healing",
            shortDescription: "Your heart yearns to heal the world through unconditional love and spiritual teaching.",
            fullReading: `
                <h5>Your Heart's Deepest Desire</h5>
                <p>With Master Soul Urge 33, your innermost self craves to heal and uplift humanity through divine love. You have a deep need to teach, heal, and embody unconditional compassion.</p>
                
                <h5>What Truly Motivates You</h5>
                <p>At your core, you're motivated by the desire to heal, to teach, and to love without limits. You feel most fulfilled when serving as a channel for divine love.</p>
                
                <h5>Secret Dreams</h5>
                <ul>
                    <li>To heal the deepest wounds of humanity</li>
                    <li>To embody divine love perfectly</li>
                    <li>To be a master teacher of truth</li>
                    <li>To uplift human consciousness through love</li>
                </ul>
            `
        }
    },

    // ================================
    // PERSONALITY NUMBER READINGS
    // ================================
    personalityReadings: {
        1: {
            keyword: "The Leader",
            shortDescription: "You project an image of strength, confidence, and independence.",
            fullReading: `
                <h5>How Others See You</h5>
                <p>With Personality Number 1, you project an image of strength, independence, and leadership. Others see you as confident, ambitious, and capable of handling whatever challenges arise.</p>
                
                <h5>Your Social Mask</h5>
                <p>You naturally present yourself as self-assured and capable. Even when you feel uncertain inside, your exterior projects confidence. People often look to you for direction.</p>
                
                <h5>First Impressions</h5>
                <ul>
                    <li>Strong and confident</li>
                    <li>Independent and self-reliant</li>
                    <li>Ambitious and driven</li>
                    <li>Original and creative</li>
                    <li>Potentially intimidating</li>
                </ul>
                
                <h5>Style & Presentation</h5>
                <p>You likely prefer bold, distinctive clothing and accessories. Your style says "I'm unique and confident." You may be drawn to quality over quantity, preferring things that make a statement.</p>
            `
        },
        2: {
            keyword: "The Diplomat",
            shortDescription: "You project an image of gentleness, cooperation, and approachability.",
            fullReading: `
                <h5>How Others See You</h5>
                <p>With Personality Number 2, you project an image of warmth, diplomacy, and approachability. Others see you as kind, supportive, and someone who truly listens and cares.</p>
                
                <h5>Your Social Mask</h5>
                <p>You naturally present yourself as friendly and non-threatening. Your demeanor puts others at ease, and people often feel comfortable opening up to you.</p>
                
                <h5>First Impressions</h5>
                <ul>
                    <li>Warm and friendly</li>
                    <li>Good listener</li>
                    <li>Cooperative and diplomatic</li>
                    <li>Modest and unassuming</li>
                    <li>Perhaps too quiet or passive</li>
                </ul>
                
                <h5>Style & Presentation</h5>
                <p>You likely prefer soft, comfortable clothing in harmonious colors. Your style says "I'm approachable and trustworthy." You may avoid anything too bold or attention-grabbing.</p>
            `
        },
        3: {
            keyword: "The Entertainer",
            shortDescription: "You project an image of charm, creativity, and natural charisma.",
            fullReading: `
                <h5>How Others See You</h5>
                <p>With Personality Number 3, you project an image of charm, creativity, and fun. Others see you as entertaining, expressive, and someone who brings light to any gathering.</p>
                
                <h5>Your Social Mask</h5>
                <p>You naturally present yourself as cheerful and engaging. Your social presence is magnetic, and people are drawn to your apparent joy and creativity.</p>
                
                <h5>First Impressions</h5>
                <ul>
                    <li>Charming and engaging</li>
                    <li>Creative and expressive</li>
                    <li>Fun and entertaining</li>
                    <li>Optimistic and upbeat</li>
                    <li>Perhaps too scattered or superficial</li>
                </ul>
                
                <h5>Style & Presentation</h5>
                <p>You likely prefer colorful, expressive clothing that reflects your creative nature. Your style says "I'm creative and fun." You may enjoy trendy or artistic fashion choices.</p>
            `
        },
        4: {
            keyword: "The Rock",
            shortDescription: "You project an image of reliability, practicality, and solid dependability.",
            fullReading: `
                <h5>How Others See You</h5>
                <p>With Personality Number 4, you project an image of reliability, competence, and trustworthiness. Others see you as steady, practical, and someone who can be counted on.</p>
                
                <h5>Your Social Mask</h5>
                <p>You naturally present yourself as organized and capable. Your demeanor suggests that you're responsible and take things seriously.</p>
                
                <h5>First Impressions</h5>
                <ul>
                    <li>Reliable and trustworthy</li>
                    <li>Practical and sensible</li>
                    <li>Organized and methodical</li>
                    <li>Hardworking and dedicated</li>
                    <li>Perhaps too serious or rigid</li>
                </ul>
                
                <h5>Style & Presentation</h5>
                <p>You likely prefer classic, well-made clothing in traditional colors. Your style says "I'm serious and trustworthy." Quality and functionality are more important than trendiness.</p>
            `
        },
        5: {
            keyword: "The Free Spirit",
            shortDescription: "You project an image of adventure, versatility, and magnetic charm.",
            fullReading: `
                <h5>How Others See You</h5>
                <p>With Personality Number 5, you project an image of freedom, adventure, and charisma. Others see you as dynamic, exciting, and someone who lives life fully.</p>
                
                <h5>Your Social Mask</h5>
                <p>You naturally present yourself as adaptable and interesting. Your energy is magnetic, and people are drawn to your apparent zest for life.</p>
                
                <h5>First Impressions</h5>
                <ul>
                    <li>Dynamic and exciting</li>
                    <li>Versatile and adaptable</li>
                    <li>Charming and magnetic</li>
                    <li>Free-spirited and adventurous</li>
                    <li>Perhaps too restless or unpredictable</li>
                </ul>
                
                <h5>Style & Presentation</h5>
                <p>You likely prefer varied, trendy clothing that changes with your mood. Your style says "I'm exciting and unpredictable." You may collect styles from your various adventures.</p>
            `
        },
        6: {
            keyword: "The Nurturer",
            shortDescription: "You project an image of warmth, responsibility, and caring dedication.",
            fullReading: `
                <h5>How Others See You</h5>
                <p>With Personality Number 6, you project an image of warmth, responsibility, and nurturing care. Others see you as helpful, devoted, and someone who cares deeply about family and community.</p>
                
                <h5>Your Social Mask</h5>
                <p>You naturally present yourself as caring and responsible. Your presence suggests someone who is willing to help and take care of others' needs.</p>
                
                <h5>First Impressions</h5>
                <ul>
                    <li>Warm and caring</li>
                    <li>Responsible and devoted</li>
                    <li>Helpful and supportive</li>
                    <li>Home and family oriented</li>
                    <li>Perhaps too self-sacrificing or controlling</li>
                </ul>
                
                <h5>Style & Presentation</h5>
                <p>You likely prefer comfortable, attractive clothing that looks put-together. Your style says "I care about beauty and comfort." Your home is probably as well-appointed as your wardrobe.</p>
            `
        },
        7: {
            keyword: "The Thinker",
            shortDescription: "You project an image of intelligence, mystery, and thoughtful depth.",
            fullReading: `
                <h5>How Others See You</h5>
                <p>With Personality Number 7, you project an image of intelligence, mystery, and depth. Others see you as thoughtful, private, and someone who knows more than they reveal.</p>
                
                <h5>Your Social Mask</h5>
                <p>You naturally present yourself as reserved and analytical. Your demeanor suggests someone who thinks deeply and doesn't share themselves easily.</p>
                
                <h5>First Impressions</h5>
                <ul>
                    <li>Intelligent and analytical</li>
                    <li>Reserved and mysterious</li>
                    <li>Dignified and composed</li>
                    <li>Spiritual or philosophical</li>
                    <li>Perhaps too distant or cold</li>
                </ul>
                
                <h5>Style & Presentation</h5>
                <p>You likely prefer understated, quality clothing in subdued colors. Your style says "There's more to me than meets the eye." You may be attracted to unusual or intellectual accessories.</p>
            `
        },
        8: {
            keyword: "The Authority",
            shortDescription: "You project an image of power, success, and executive capability.",
            fullReading: `
                <h5>How Others See You</h5>
                <p>With Personality Number 8, you project an image of power, success, and authority. Others see you as ambitious, capable, and someone who commands respect.</p>
                
                <h5>Your Social Mask</h5>
                <p>You naturally present yourself as confident and successful. Your presence suggests someone who knows what they want and how to get it.</p>
                
                <h5>First Impressions</h5>
                <ul>
                    <li>Powerful and authoritative</li>
                    <li>Successful and ambitious</li>
                    <li>Competent and capable</li>
                    <li>Executive and commanding</li>
                    <li>Perhaps too intimidating or materialistic</li>
                </ul>
                
                <h5>Style & Presentation</h5>
                <p>You likely prefer high-quality, impressive clothing that conveys success. Your style says "I'm successful and powerful." You may favor designer labels or obviously expensive items.</p>
            `
        },
        9: {
            keyword: "The Humanitarian",
            shortDescription: "You project an image of compassion, wisdom, and universal concern.",
            fullReading: `
                <h5>How Others See You</h5>
                <p>With Personality Number 9, you project an image of compassion, wisdom, and broad-minded concern for all. Others see you as kind, wise, and someone who cares about the world.</p>
                
                <h5>Your Social Mask</h5>
                <p>You naturally present yourself as compassionate and understanding. Your presence suggests someone who sees the bigger picture and cares about humanity.</p>
                
                <h5>First Impressions</h5>
                <ul>
                    <li>Compassionate and kind</li>
                    <li>Wise and experienced</li>
                    <li>Globally-minded and idealistic</li>
                    <li>Artistic and creative</li>
                    <li>Perhaps too idealistic or aloof</li>
                </ul>
                
                <h5>Style & Presentation</h5>
                <p>You likely prefer elegant, timeless clothing with a touch of artistic flair. Your style says "I'm sophisticated and worldly." You may favor global or artisanal pieces.</p>
            `
        },
        11: {
            keyword: "The Inspirer",
            shortDescription: "You project an image of spiritual depth, intuition, and inspirational presence.",
            fullReading: `
                <h5>How Others See You</h5>
                <p>With Master Personality 11, you project an image of spiritual depth, sensitivity, and inspirational quality. Others may sense something special about you even if they can't define it.</p>
                
                <h5>First Impressions</h5>
                <ul>
                    <li>Spiritual and intuitive</li>
                    <li>Inspirational and magnetic</li>
                    <li>Sensitive and perceptive</li>
                    <li>Somewhat otherworldly</li>
                </ul>
            `
        },
        22: {
            keyword: "The Master Builder",
            shortDescription: "You project an image of immense capability, vision, and practical power.",
            fullReading: `
                <h5>How Others See You</h5>
                <p>With Master Personality 22, you project an image of powerful capability and visionary leadership. Others sense that you can accomplish great things and may look to you for big-picture guidance.</p>
                
                <h5>First Impressions</h5>
                <ul>
                    <li>Powerful and capable</li>
                    <li>Visionary and practical</li>
                    <li>Masterful and commanding</li>
                    <li>Potentially overwhelming</li>
                </ul>
            `
        },
        33: {
            keyword: "The Master Healer",
            shortDescription: "You project an image of divine love, healing presence, and spiritual mastery.",
            fullReading: `
                <h5>How Others See You</h5>
                <p>With Master Personality 33, you project an image of profound love and healing presence. Others may feel comforted, healed, or spiritually uplifted just by being near you.</p>
                
                <h5>First Impressions</h5>
                <ul>
                    <li>Loving and healing</li>
                    <li>Spiritually advanced</li>
                    <li>Deeply compassionate</li>
                    <li>Almost saint-like</li>
                </ul>
            `
        }
    },

    // ================================
    // BIRTHDAY NUMBER READINGS
    // ================================
    birthdayReadings: {
        1: { keyword: "Leadership & Independence", description: "You have a special gift for leadership and original thinking. Use your independence to pioneer new paths." },
        2: { keyword: "Cooperation & Sensitivity", description: "You have a special gift for diplomacy and intuition. Your sensitivity allows you to understand others deeply." },
        3: { keyword: "Creative Expression", description: "You have a special gift for communication and creativity. Express yourself through art, words, or performance." },
        4: { keyword: "Building & Organization", description: "You have a special gift for creating structure and lasting foundations. Your practical skills are your strength." },
        5: { keyword: "Freedom & Adventure", description: "You have a special gift for adaptability and experiencing life fully. Your versatility opens many doors." },
        6: { keyword: "Nurturing & Responsibility", description: "You have a special gift for caring and creating harmony. Your loving nature heals and supports others." },
        7: { keyword: "Analysis & Spirituality", description: "You have a special gift for deep thinking and spiritual insight. Your wisdom comes from contemplation." },
        8: { keyword: "Power & Achievement", description: "You have a special gift for business and material success. Your executive ability can create abundance." },
        9: { keyword: "Compassion & Wisdom", description: "You have a special gift for humanitarian concern and artistic expression. Your broad vision serves many." },
        10: { keyword: "Leadership & Creativity", description: "You combine leadership (1) with infinite potential (0). You're meant to lead in creative, original ways." },
        11: { keyword: "Spiritual Inspiration", description: "Master Number 11 gives you powerful intuition and spiritual gifts. You're meant to inspire and illuminate." },
        12: { keyword: "Creative Communication", description: "You blend creativity (3) with cooperation (2). You're gifted at expressing ideas that bring people together." },
        13: { keyword: "Practical Creativity", description: "You combine creative expression (4=1+3) with disciplined effort. Your creativity manifests through hard work." },
        14: { keyword: "Freedom Through Discipline", description: "You balance freedom (5) with structure (4). Adventures lead to learning that creates stable foundations." },
        15: { keyword: "Loving Freedom", description: "You combine responsibility (6) with adventure (5). You find freedom through nurturing and loving service." },
        16: { keyword: "Spiritual Awakening", description: "The 16 brings spiritual tests that awaken wisdom. Through challenges, you develop profound insight." },
        17: { keyword: "Spiritual Achievement", description: "You blend spirituality (7) with achievement (8). Your success comes through inner wisdom and integrity." },
        18: { keyword: "Humanitarian Leadership", description: "You combine compassion (9) with leadership (1+8). You're meant to lead humanitarian efforts." },
        19: { keyword: "Independent Wisdom", description: "You blend independence (1) with humanitarian wisdom (9). Your individual path serves the collective." },
        20: { keyword: "Sensitive Intuition", description: "The 20 amplifies sensitivity and intuition. You're highly receptive to others' needs and spiritual guidance." },
        21: { keyword: "Creative Success", description: "You combine creativity (3) with cooperation and leadership. Your creative expression brings success and joy." },
        22: { keyword: "Master Builder", description: "Master Number 22 gives you exceptional manifesting power. You're capable of building lasting achievements for humanity." },
        23: { keyword: "Creative Communication", description: "You combine adaptability (5) with creative expression (3). Your communication style is dynamic and persuasive." },
        24: { keyword: "Nurturing Builder", description: "You blend responsibility (6) with practical skill (4). You build foundations that nurture and support others." },
        25: { keyword: "Wisdom Through Experience", description: "You combine analysis (7) with freedom (5). Your wisdom comes through varied life experiences." },
        26: { keyword: "Material Responsibility", description: "You blend achievement (8) with nurturing (6). Your success is tied to caring for others and family." },
        27: { keyword: "Intuitive Wisdom", description: "You combine compassion (9) with spirituality (7). Your deep wisdom serves humanitarian purposes." },
        28: { keyword: "Leadership & Cooperation", description: "You blend leadership (1) with partnership (2+8). Your success comes through leading while working with others." },
        29: { keyword: "Spiritual Humanitarian", description: "Master potential (11) combines with humanitarian wisdom (9). You're meant to inspire and serve broadly." },
        30: { keyword: "Expressive Communication", description: "The 30 amplifies creative expression (3) with infinite potential (0). Your communication gifts are powerful." },
        31: { keyword: "Creative Independence", description: "You combine creativity (4) with leadership (1). Your original creative expression leads and inspires." }
    },

    // ================================
    // PERSONAL YEAR READINGS
    // ================================
    personalYearReadings: {
        1: {
            keyword: "New Beginnings",
            description: "This is a year of new beginnings and fresh starts. It's time to plant seeds for the future, initiate projects, and assert your independence. Take action on your dreams.",
            themes: ["Starting new projects", "Independence", "Leadership", "Self-improvement", "Planting seeds"],
            advice: "Be bold and take initiative. This year favors action and new beginnings. Don't wait for permission—create your own opportunities."
        },
        2: {
            keyword: "Cooperation & Patience",
            description: "This is a year for patience, cooperation, and attending to details. Seeds planted last year need nurturing. Focus on relationships and working with others.",
            themes: ["Partnerships", "Patience", "Diplomacy", "Sensitivity", "Details"],
            advice: "Practice patience and diplomacy. This year favors cooperation over competition. Pay attention to the needs of others and nurture your relationships."
        },
        3: {
            keyword: "Creativity & Expression",
            description: "This is a year for creative expression, social activity, and joy. Let your creativity flow, expand your social circle, and allow yourself to enjoy life.",
            themes: ["Creativity", "Self-expression", "Social life", "Joy", "Communication"],
            advice: "Express yourself creatively and enjoy social activities. This year favors artistic pursuits and communication. Share your joy with others."
        },
        4: {
            keyword: "Building & Hard Work",
            description: "This is a year for building foundations and putting in solid work. Focus on practical matters, organize your life, and work steadily toward your goals.",
            themes: ["Hard work", "Building foundations", "Organization", "Discipline", "Practical matters"],
            advice: "Focus on building solid foundations through dedicated effort. This year favors practical accomplishments. Work steadily and systematically."
        },
        5: {
            keyword: "Change & Freedom",
            description: "This is a year of change, freedom, and new experiences. Embrace variety, travel if possible, and be open to unexpected opportunities and transformations.",
            themes: ["Change", "Freedom", "Travel", "Adventure", "Flexibility"],
            advice: "Embrace change and seek new experiences. This year favors flexibility and adventure. Be open to the unexpected and don't resist transformation."
        },
        6: {
            keyword: "Love & Responsibility",
            description: "This is a year focused on home, family, and responsibility. Relationships deepen, and you may take on more caregiving roles. Create beauty and harmony.",
            themes: ["Home and family", "Relationships", "Responsibility", "Service", "Beauty"],
            advice: "Focus on home, family, and creating harmony. This year favors nurturing relationships and taking responsibility. Create beauty in your environment."
        },
        7: {
            keyword: "Reflection & Wisdom",
            description: "This is a year for inner reflection, study, and spiritual growth. Take time for solitude and contemplation. Seek knowledge and develop your inner life.",
            themes: ["Reflection", "Spirituality", "Study", "Solitude", "Wisdom"],
            advice: "Turn inward for reflection and spiritual growth. This year favors study, meditation, and seeking deeper understanding. Honor your need for solitude."
        },
        8: {
            keyword: "Achievement & Power",
            description: "This is a year of achievement, recognition, and material success. Business matters are favored. Step into your power and reap rewards from past efforts.",
            themes: ["Achievement", "Business success", "Recognition", "Power", "Material gain"],
            advice: "Focus on achievement and step into your power. This year favors business and material success. Reap the rewards of your past efforts."
        },
        9: {
            keyword: "Completion & Release",
            description: "This is a year of completion, letting go, and humanitarian focus. Release what no longer serves you. Prepare for the new cycle beginning next year.",
            themes: ["Completion", "Letting go", "Humanitarian service", "Endings", "Transformation"],
            advice: "Release what no longer serves you and complete unfinished business. This year favors endings that make space for new beginnings. Give generously."
        },
        11: {
            keyword: "Spiritual Awakening",
            description: "This master year amplifies intuition and spiritual awareness. You may experience significant spiritual growth or serve as an inspiration to others.",
            themes: ["Spiritual growth", "Intuition", "Inspiration", "Higher awareness", "Teaching"],
            advice: "Pay attention to your intuition and spiritual experiences. This master year offers opportunities for significant spiritual awakening and inspiring others."
        },
        22: {
            keyword: "Master Building",
            description: "This master year offers potential for significant achievements that serve the greater good. Your practical and visionary abilities combine power// ================================
// NUMEROLOGY DATA - Complete Readings
// ================================

const NumerologyData = {
    // Letter to number conversion (Pythagorean system)
    letterValues: {
        'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
        'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
        'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
    },

    vowels: ['A', 'E', 'I', 'O', 'U'],
    masterNumbers: [11, 22, 33],

    // Life Path Readings
    lifePathReadings: {
        1: {
            keyword: "The Pioneer & Leader",
            shortDescription: "You are here to learn independence, self-reliance, and leadership. Your path is about standing on your own and blazing new trails.",
            fullReading: `<h5>Core Essence</h5><p>Life Path 1 individuals are the pioneers of numerology. You possess an innate drive to be first, to lead, and to create new beginnings.</p><h5>Strengths</h5><ul><li>Natural leadership abilities</li><li>Original thinking and innovation</li><li>Strong willpower and determination</li><li>Courage to take initiative</li></ul><h5>Challenges</h5><ul><li>Learning to accept help</li><li>Overcoming stubbornness</li><li>Developing patience with others</li></ul><h5>Career</h5><p>Entrepreneurship, management, creative direction, or any pioneering field.</p>`,
            affirmation: "I am a confident leader who creates positive change."
        },
        2: {
            keyword: "The Peacemaker & Diplomat",
            shortDescription: "You are here to learn cooperation, partnership, and sensitivity. Your path is about bringing harmony and balance.",
            fullReading: `<h5>Core Essence</h5><p>Life Path 2 individuals are the peacemakers. You possess profound sensitivity, intuition, and the gift of seeing both sides.</p><h5>Strengths</h5><ul><li>Exceptional diplomatic skills</li><li>Deep intuition and emotional intelligence</li><li>Natural ability to mediate</li><li>Supportive and nurturing presence</li></ul><h5>Challenges</h5><ul><li>Setting healthy boundaries</li><li>Overcoming sensitivity to criticism</li><li>Speaking up for yourself</li></ul><h5>Career</h5><p>Counseling, mediation, human resources, or partnership roles.</p>`,
            affirmation: "I honor my sensitive nature while maintaining healthy boundaries."
        },
        3: {
            keyword: "The Creative Communicator",
            shortDescription: "You are here to learn self-expression, creativity, and joy. Your path is about sharing your gifts through communication.",
            fullReading: `<h5>Core Essence</h5><p>Life Path 3 individuals are creative spirits and communicators. You possess natural charisma and artistic ability.</p><h5>Strengths</h5><ul><li>Natural artistic talents</li><li>Excellent communication abilities</li><li>Magnetic personality</li><li>Ability to inspire and uplift</li></ul><h5>Challenges</h5><ul><li>Completing projects and focus</li><li>Handling criticism</li><li>Developing depth beyond charm</li></ul><h5>Career</h5><p>Writing, performing arts, teaching, marketing, or design.</p>`,
            affirmation: "I express my authentic creativity with joy and purpose."
        },
        4: {
            keyword: "The Master Builder",
            shortDescription: "You are here to learn discipline, stability, and hard work. Your path is about building lasting foundations.",
            fullReading: `<h5>Core Essence</h5><p>Life Path 4 individuals are builders and organizers. You possess practical wisdom and strong work ethic.</p><h5>Strengths</h5><ul><li>Exceptional organizational abilities</li><li>Strong work ethic</li><li>Practical problem-solving</li><li>Reliability and trustworthiness</li></ul><h5>Challenges</h5><ul><li>Adapting to unexpected changes</li><li>Overcoming rigidity</li><li>Embracing spontaneity</li></ul><h5>Career</h5><p>Engineering, accounting, project management, or construction.</p>`,
            affirmation: "I build lasting foundations while remaining open to life's surprises."
        },
        5: {
            keyword: "The Freedom Seeker",
            shortDescription: "You are here to learn adaptability, freedom, and constructive change. Your path is about experiencing life fully.",
            fullReading: `<h5>Core Essence</h5><p>Life Path 5 individuals are adventurers and change-agents. You possess restless energy and insatiable curiosity.</p><h5>Strengths</h5><ul><li>Remarkable adaptability</li><li>Magnetic personality</li><li>Quick thinking</li><li>Ability to embrace change</li></ul><h5>Challenges</h5><ul><li>Maintaining focus</li><li>Avoiding overindulgence</li><li>Fear of commitment</li></ul><h5>Career</h5><p>Travel industry, sales, entrepreneurship, or journalism.</p>`,
            affirmation: "I embrace life's adventures while cultivating inner stability."
        },
        6: {
            keyword: "The Nurturer & Healer",
            shortDescription: "You are here to learn responsibility, love, and service. Your path is about creating harmony through compassionate care.",
            fullReading: `<h5>Core Essence</h5><p>Life Path 6 individuals are nurturers and healers. You possess deep compassion and a strong drive to care for others.</p><h5>Strengths</h5><ul><li>Deep capacity for love</li><li>Natural healing abilities</li><li>Strong sense of responsibility</li><li>Artistic sensibilities</li></ul><h5>Challenges</h5><ul><li>Perfectionism</li><li>Becoming controlling</li><li>Neglecting your own needs</li></ul><h5>Career</h5><p>Healthcare, counseling, teaching, or design.</p>`,
            affirmation: "I nurture others from a foundation of self-love."
        },
        7: {
            keyword: "The Seeker & Mystic",
            shortDescription: "You are here to learn wisdom, introspection, and spiritual understanding. Your path is about seeking truth.",
            fullReading: `<h5>Core Essence</h5><p>Life Path 7 individuals are seekers and mystics. You possess deep analytical abilities and spiritual inclinations.</p><h5>Strengths</h5><ul><li>Profound analytical abilities</li><li>Strong intuition</li><li>Ability to see beneath surfaces</li><li>Natural spirituality</li></ul><h5>Challenges</h5><ul><li>Excessive isolation</li><li>Over-intellectualizing emotions</li><li>Cynicism and distrust</li></ul><h5>Career</h5><p>Science, psychology, spiritual teaching, or research.</p>`,
            affirmation: "I trust my inner wisdom while remaining open to life's mysteries."
        },
        8: {
            keyword: "The Powerhouse & Achiever",
            shortDescription: "You are here to master the material world with spiritual integrity. Your path is about power and abundance.",
            fullReading: `<h5>Core Essence</h5><p>Life Path 8 individuals are powerhouses and achievers. You possess strong business acumen and leadership abilities.</p><h5>Strengths</h5><ul><li>Natural business abilities</li><li>Strong organizational skills</li><li>Ability to manifest abundance</li><li>Resilience and determination</li></ul><h5>Challenges</h5><ul><li>Balancing material and spiritual</li><li>Overcoming workaholism</li><li>Handling power wisely</li></ul><h5>Career</h5><p>Executive roles, entrepreneurship, finance, or law.</p>`,
            affirmation: "I use my power and abundance to create positive change."
        },
        9: {
            keyword: "The Humanitarian & Sage",
            shortDescription: "You are here to learn universal love and selfless service. Your path is about compassion for all humanity.",
            fullReading: `<h5>Core Essence</h5><p>Life Path 9 individuals are humanitarians and sages. You possess broad vision and deep compassion for humanity.</p><h5>Strengths</h5><ul><li>Deep compassion</li><li>Broad perspective</li><li>Artistic abilities</li><li>Wisdom through experience</li></ul><h5>Challenges</h5><ul><li>Letting go of past hurts</li><li>Avoiding self-righteousness</li><li>Balancing universal and personal love</li></ul><h5>Career</h5><p>Social work, counseling, arts, or humanitarian organizations.</p>`,
            affirmation: "I serve humanity with love, releasing attachment to outcomes."
        },
        11: {
            keyword: "The Spiritual Messenger (Master Number)",
            shortDescription: "You are a spiritual messenger and intuitive channel. Your master path combines sensitivity with higher spiritual purpose.",
            fullReading: `<h5>Master Number Essence</h5><p>Master Number 11 carries exceptional spiritual gifts. You have access to higher realms and are meant to inspire others.</p><h5>Strengths</h5><ul><li>Powerful intuition</li><li>Visionary insight</li><li>Ability to inspire masses</li><li>Deep spiritual understanding</li></ul><h5>Challenges</h5><ul><li>Extreme nervous tension</li><li>Feeling misunderstood</li><li>Living up to potential</li></ul><h5>Purpose</h5><p>Spiritual teaching, counseling, artistic expression, or inspirational leadership.</p>`,
            affirmation: "I am a clear channel for spiritual wisdom, grounded in love."
        },
        22: {
            keyword: "The Master Builder (Master Number)",
            shortDescription: "You are a master builder capable of manifesting grand visions. Your path combines practicality with visionary power.",
            fullReading: `<h5>Master Number Essence</h5><p>Master Number 22 is the most powerful in numerology. You can transform ambitious dreams into tangible reality.</p><h5>Strengths</h5><ul><li>Ability to manifest grand visions</li><li>Exceptional leadership</li><li>Practical wisdom</li><li>Capacity for large-scale projects</li></ul><h5>Challenges</h5><ul><li>Enormous pressure from potential</li><li>Frustration when reality doesn't match vision</li><li>Tendency to become overwhelmed</li></ul><h5>Purpose</h5><p>Architecture, engineering, international organizations, or large-scale entrepreneurship.</p>`,
            affirmation: "I manifest my grandest visions for the benefit of all."
        },
        33: {
            keyword: "The Master Teacher (Master Number)",
            shortDescription: "You are a master teacher and healer of humanity. Your path combines nurturing with cosmic love and wisdom.",
            fullReading: `<h5>Master Number Essence</h5><p>Master Number 33 embodies the highest form of love and service. You are a master healer and teacher.</p><h5>Strengths</h5><ul><li>Profound healing presence</li><li>Capacity for unconditional love</li><li>Natural teaching gifts</li><li>Deep wisdom</li></ul><h5>Challenges</h5><ul><li>Tendency toward martyrdom</li><li>Taking on others' pain</li><li>Difficulty maintaining boundaries</li></ul><h5>Purpose</h5><p>Spiritual teaching, healing arts, counseling, or humanitarian leadership.</p>`,
            affirmation: "I embody divine love, teaching through presence and serving from wholeness."
        }
    },

    // Destiny Number Readings
    destinyReadings: {
        1: { keyword: "Pioneer of New Paths", shortDescription: "Your destiny is to lead, innovate, and forge new paths for others." },
        2: { keyword: "Master of Cooperation", shortDescription: "Your destiny is to bring harmony and master partnership." },
        3: { keyword: "Voice of Inspiration", shortDescription: "Your destiny is to express creativity and inspire others." },
        4: { keyword: "Builder of Foundations", shortDescription: "Your destiny is to build lasting structures and create order." },
        5: { keyword: "Agent of Change", shortDescription: "Your destiny is to embrace change and help others adapt." },
        6: { keyword: "Heart of Service", shortDescription: "Your destiny is to serve, heal, and create harmony." },
        7: { keyword: "Seeker of Truth", shortDescription: "Your destiny is to seek wisdom and share spiritual insights." },
        8: { keyword: "Master of Manifestation", shortDescription: "Your destiny is to master abundance with integrity." },
        9: { keyword: "Servant of Humanity", shortDescription: "Your destiny is to serve humanity with compassion." },
        11: { keyword: "Illuminator of Paths", shortDescription: "Your master destiny is to inspire through spiritual insight." },
        22: { keyword: "Architect of Dreams", shortDescription: "Your master destiny is to manifest grand humanitarian visions." },
        33: { keyword: "Channel of Divine Love", shortDescription: "Your master destiny is to embody and teach unconditional love." }
    },

    // Soul Urge Readings
    soulUrgeReadings: {
        1: { keyword: "Desire for Independence", shortDescription: "Your heart yearns for independence, recognition, and freedom to lead." },
        2: { keyword: "Desire for Love & Peace", shortDescription: "Your heart yearns for deep connection, harmony, and appreciation." },
        3: { keyword: "Desire for Expression", shortDescription: "Your heart yearns to express creativity and experience joy." },
        4: { keyword: "Desire for Security", shortDescription: "Your heart yearns for stability, order, and lasting achievement." },
        5: { keyword: "Desire for Freedom", shortDescription: "Your heart yearns for adventure, variety, and life experiences." },
        6: { keyword: "Desire to Nurture", shortDescription: "Your heart yearns to love, nurture, and create harmony." },
        7: { keyword: "Desire for Understanding", shortDescription: "Your heart yearns for deep knowledge and spiritual truth." },
        8: { keyword: "Desire for Achievement", shortDescription: "Your heart yearns for success, recognition, and power." },
        9: { keyword: "Desire to Serve Humanity", shortDescription: "Your heart yearns to make a difference and love unconditionally." },
        11: { keyword: "Desire for Spiritual Illumination", shortDescription: "Your heart yearns for enlightenment and to inspire others." },
        22: { keyword: "Desire to Build a Legacy", shortDescription: "Your heart yearns to create something monumental for humanity." },
        33: { keyword: "Desire for Universal Healing", shortDescription: "Your heart yearns to heal the world through unconditional love." }
    },

    // Personality Readings
    personalityReadings: {
        1: { keyword: "The Leader", shortDescription: "You project strength, confidence, and independence." },
        2: { keyword: "The Diplomat", shortDescription: "You project gentleness, cooperation, and approachability." },
        3: { keyword: "The Entertainer", shortDescription: "You project charm, creativity, and natural charisma." },
        4: { keyword: "The Rock", shortDescription: "You project reliability, practicality, and dependability." },
        5: { keyword: "The Free Spirit", shortDescription: "You project adventure, versatility, and magnetic charm." },
        6: { keyword: "The Nurturer", shortDescription: "You project warmth, responsibility, and caring dedication." },
        7: { keyword: "The Thinker", shortDescription: "You project intelligence, mystery, and thoughtful depth." },
        8: { keyword: "The Authority", shortDescription: "You project power, success, and executive capability." },
        9: { keyword: "The Humanitarian", shortDescription: "You project compassion, wisdom, and universal concern." },
        11: { keyword: "The Inspirer", shortDescription: "You project spiritual depth and inspirational presence." },
        22: { keyword: "The Master Builder", shortDescription: "You project immense capability and visionary power." },
        33: { keyword: "The Master Healer", shortDescription: "You project divine love and healing presence." }
    },

    // Birthday Readings
    birthdayReadings: {
        1: { keyword: "Leadership", description: "You have a gift for leadership and original thinking." },
        2: { keyword: "Cooperation", description: "You have a gift for diplomacy and intuition." },
        3: { keyword: "Expression", description: "You have a gift for communication and creativity." },
        4: { keyword: "Building", description: "You have a gift for creating structure and foundations." },
        5: { keyword: "Freedom", description: "You have a gift for adaptability and experiencing life." },
        6: { keyword: "Nurturing", description: "You have a gift for caring and creating harmony." },
        7: { keyword: "Analysis", description: "You have a gift for deep thinking and spiritual insight." },
        8: { keyword: "Achievement", description: "You have a gift for business and material success." },
        9: { keyword: "Compassion", description: "You have a gift for humanitarian concern." },
        10: { keyword: "Leadership & Creativity", description: "You combine leadership with infinite potential." },
        11: { keyword: "Spiritual Inspiration", description: "Master Number: powerful intuition and spiritual gifts." },
        12: { keyword: "Creative Communication", description: "You blend creativity with cooperation." },
        13: { keyword: "Practical Creativity", description: "Your creativity manifests through hard work." },
        14: { keyword: "Freedom Through Discipline", description: "You balance freedom with structure." },
        15: { keyword: "Loving Freedom", description: "You find freedom through loving service." },
        16: { keyword: "Spiritual Awakening", description: "Through challenges, you develop profound insight." },
        17: { keyword: "Spiritual Achievement", description: "Your success comes through inner wisdom." },
        18: { keyword: "Humanitarian Leadership", description: "You're meant to lead humanitarian efforts." },
        19: { keyword: "Independent Wisdom", description: "Your individual path serves the collective." },
        20: { keyword: "Sensitive Intuition", description: "You're highly receptive to spiritual guidance." },
        21: { keyword: "Creative Success", description: "Your creative expression brings success." },
        22: { keyword: "Master Builder", description: "Master Number: exceptional manifesting power." },
        23: { keyword: "Creative Communication", description: "Your communication style is dynamic." },
        24: { keyword: "Nurturing Builder", description: "You build foundations that nurture others." },
        25: { keyword: "Wisdom Through Experience", description: "Your wisdom comes through varied experiences." },
        26: { keyword: "Material Responsibility", description: "Your success is tied to caring for others." },
        27: { keyword: "Intuitive Wisdom", description: "Your deep wisdom serves humanitarian purposes." },
        28: { keyword: "Leadership & Cooperation", description: "Your success comes through leading and partnering." },
        29: { keyword: "Spiritual Humanitarian", description: "You're meant to inspire and serve broadly." },
        30: { keyword: "Expressive Communication", description: "Your communication gifts are powerful." },
        31: { keyword: "Creative Independence", description: "Your creative expression leads and inspires." }
    },

    // Personal Year Readings
    personalYearReadings: {
        1: { keyword: "New Beginnings", description: "A year of new starts. Plant seeds and take initiative.", themes: ["New projects", "Independence", "Self-improvement"] },
        2: { keyword: "Cooperation & Patience", description: "A year for patience and partnerships. Nurture your seeds.", themes: ["Partnerships", "Patience", "Diplomacy"] },
        3: { keyword: "Creativity & Expression", description: "A year for creative expression and social activity.", themes: ["Creativity", "Self-expression", "Joy"] },
        4: { keyword: "Building & Hard Work", description: "A year for building foundations through dedicated work.", themes: ["Hard work", "Organization", "Discipline"] },
        5: { keyword: "Change & Freedom", description: "A year of change and new experiences. Embrace variety.", themes: ["Change", "Freedom", "Adventure"] },
        6: { keyword: "Love & Responsibility", description: "A year focused on home, family, and responsibility.", themes: ["Family", "Relationships", "Service"] },
        7: { keyword: "Reflection & Wisdom", description: "A year for inner reflection and spiritual growth.", themes: ["Reflection", "Spirituality", "Study"] },
        8: { keyword: "Achievement & Power", description: "A year of achievement and material success.", themes: ["Achievement", "Recognition", "Power"] },
        9: { keyword: "Completion & Release", description: "A year of completion. Release what no longer serves you.", themes: ["Completion", "Letting go", "Transformation"] },
        11: { keyword: "Spiritual Awakening", description: "A master year amplifying intuition and spiritual growth.", themes: ["Spiritual growth", "Intuition", "Inspiration"] },
        22: { keyword: "Master Building", description: "A master year for significant achievements serving humanity.", themes: ["Major achievements", "Leadership", "Legacy"] }
    },

    // Reflection Questions
    reflectionQuestions: {
        1: ["How can I develop more independence while staying connected?", "What new paths am I being called to pioneer?", "Where am I afraid to lead, and why?"],
        2: ["How can I better balance giving and receiving?", "What relationships need more attention?", "Where do I need stronger boundaries?"],
        3: ["How am I expressing my creativity?", "What brings me genuine joy?", "Where am I holding back my authentic voice?"],
        4: ["What foundations am I building for my future?", "Where do I need more discipline?", "How can I balance structure with flexibility?"],
        5: ["What changes am I resisting?", "How can I use my freedom responsibly?", "What new experiences is life calling me toward?"],
        6: ["How am I nurturing myself as well as others?", "What does healthy responsibility look like?", "Where am I being too controlling?"],
        7: ["What truths am I seeking?", "How do I balance solitude with connection?", "What is my inner wisdom telling me?"],
        8: ["How am I using my power?", "What is my relationship with abundance?", "How can I achieve while maintaining integrity?"],
        9: ["What am I ready to release?", "How can I serve more broadly?", "What past hurts need healing?"],
        11: ["How can I trust my intuition more?", "What spiritual gifts am I developing?", "How can I inspire others?"],
        22: ["What grand vision wants to manifest through me?", "How can I serve humanity through my work?", "What legacy am I building?"],
        33: ["How can I heal without depleting myself?", "What does unconditional love look like in practice?", "How am I being called to teach?"]
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NumerologyData;
}
