const { useState, useEffect } = React;

// Navigation Component
const Navigation = ({ activeSection, setActiveSection, language, setLanguage }) => {
    const sections = {
        en: [
            { id: 'home', name: 'Home', icon: '🏠' },
            { id: 'nomadic', name: 'Nomadic Life', icon: '⛺' },
            { id: 'language', name: 'Language & Script', icon: '📜' },
            { id: 'music', name: 'Traditional Music', icon: '🎵' },
            { id: 'shagai', name: 'Shagai Game', icon: '🎲' }
        ],
        mn: [
            { id: 'home', name: 'Нүүр хуудас', icon: '🏠' },
            { id: 'nomadic', name: 'Нүүдлийн амьдрал', icon: '⛺' },
            { id: 'language', name: 'Хэл ба бичиг', icon: '📜' },
            { id: 'music', name: 'Уламжлалт хөгжим', icon: '🎵' },
            { id: 'shagai', name: 'Шагай тоглоом', icon: '🎲' }
        ],
        ja: [
            { id: 'home', name: 'ホーム', icon: '🏠' },
            { id: 'nomadic', name: '遊牧生活', icon: '⛺' },
            { id: 'language', name: '言語と文字', icon: '📜' },
            { id: 'music', name: '伝統音楽', icon: '🎵' },
            { id: 'shagai', name: 'シャガイゲーム', icon: '🎲' }
        ]
    };

    const titles = {
        en: 'Mongolian Culture',
        mn: 'Монголын соёл',
        ja: 'モンゴル文化'
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-[var(--deep-blue)] to-[var(--earth-brown)] shadow-xl z-50">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <h1
                        className="heading-font text-2xl md:text-3xl font-bold text-[var(--cream)] cursor-pointer hover:text-[var(--sunset-orange)] transition-colors"
                        onClick={() => setActiveSection('home')}
                    >
                        {titles[language]}
                    </h1>
                    <div className="flex items-center gap-4 md:gap-8">
                        <div className="flex gap-2 bg-white/10 rounded-lg p-1">
                            <button
                                onClick={() => setLanguage('en')}
                                className={`px-3 py-1 rounded text-sm font-semibold transition-all ${
                                    language === 'en' ? 'bg-[var(--sunset-orange)] text-white' : 'text-[var(--cream)] hover:bg-white/10'
                                }`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => setLanguage('mn')}
                                className={`px-3 py-1 rounded text-sm font-semibold transition-all ${
                                    language === 'mn' ? 'bg-[var(--sunset-orange)] text-white' : 'text-[var(--cream)] hover:bg-white/10'
                                }`}
                            >
                                MN
                            </button>
                            <button
                                onClick={() => setLanguage('ja')}
                                className={`px-3 py-1 rounded text-sm font-semibold transition-all ${
                                    language === 'ja' ? 'bg-[var(--sunset-orange)] text-white' : 'text-[var(--cream)] hover:bg-white/10'
                                }`}
                            >
                                JP
                            </button>
                        </div>
                        <div className="flex gap-6 md:gap-8">
                            {sections[language].map((section, idx) => (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(section.id)}
                                    className={`nav-link text-[var(--cream)] hover:text-[var(--sunset-orange)] transition-colors pb-1 text-sm md:text-base ${
                                        activeSection === section.id ? 'active' : ''
                                    }`}
                                    style={{ animationDelay: `${idx * 0.1}s` }}
                                >
                                    <span className="hidden md:inline">{section.name}</span>
                                    <span className="md:hidden text-xl">{section.icon}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

// Home Section
const HomeSection = ({ language, setActiveSection }) => {
    const content = {
        en: {
            welcome: 'Welcome to',
            title: 'Mongolian Culture',
            subtitle: 'Explore the rich heritage of the Mongolian people through their nomadic traditions, ancient script, and mesmerizing music that echoes across the endless steppes.',
            cards: [
                { title: 'Nomadic Lifestyle', desc: 'Discover the traditions of yurt dwelling and steppe living', icon: '⛺', section: 'nomadic' },
                { title: 'Ancient Script', desc: 'Learn the vertical Mongolian script and its history', icon: '📜', section: 'language' },
                { title: 'Traditional Music', desc: 'Experience throat singing and traditional instruments', icon: '🎵', section: 'music' },
                { title: 'Shagai Game', desc: 'Play the traditional Mongolian ankle bone game', icon: '🎲', section: 'shagai' }
            ]
        },
        mn: {
            welcome: 'Тавтай морилно уу',
            title: 'Монголын соёл',
            subtitle: 'Монгол ардын баялаг өвийг нүүдлийн уламжлал, эртний бичиг, талын цуурайгаар цуурайтсан гайхамшигтай хөгжмөөр судлаарай.',
            cards: [
                { title: 'Нүүдлийн амьдрал', desc: 'Гэр, тал нутгийн амьдралын уламжлалыг судлаарай', icon: '⛺', section: 'nomadic' },
                { title: 'Эртний бичиг', desc: 'Монгол бичгийн босоо бичлэг, түүхийг суралцаарай', icon: '📜', section: 'language' },
                { title: 'Уламжлалт хөгжим', desc: 'Хөөмий, уламжлалт хөгжмийн зэмсгүүдтэй танилцаарай', icon: '🎵', section: 'music' },
                { title: 'Шагай тоглоом', desc: 'Монголын уламжлалт шагайн тоглоом тоглоорой', icon: '🎲', section: 'shagai' }
            ]
        },
        ja: {
            welcome: 'ようこそ',
            title: 'モンゴル文化',
            subtitle: '遊牧の伝統、古代文字、果てしない草原に響く魅惑的な音楽を通じて、モンゴル人の豊かな遺産を探索しましょう。',
            cards: [
                { title: '遊牧生活', desc: 'ゲルでの暮らしと草原の生活の伝統を発見', icon: '⛺', section: 'nomadic' },
                { title: '古代文字', desc: '縦書きモンゴル文字とその歴史を学ぶ', icon: '📜', section: 'language' },
                { title: '伝統音楽', desc: 'ホーミーと伝統楽器を体験', icon: '🎵', section: 'music' },
                { title: 'シャガイゲーム', desc: '伝統的なモンゴルの羊の距骨ゲームをプレイ', icon: '🎲', section: 'shagai' }
            ]
        }
    };

    const t = content[language];

    return (
        <div className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 relative">
            {/* Coworker credit badge */}
            <div className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-[var(--deep-blue)] to-[var(--earth-brown)] text-[var(--cream)] px-5 py-3 rounded-2xl shadow-xl border-2 border-[var(--gold)]/50 text-center" style={{fontFamily: 'Roboto, sans-serif'}}>
                <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-1">Created by</div>
                <div className="font-bold text-base leading-tight">Sukhe Molor</div>
            </div>
            <div className="max-w-5xl w-full">
                <div className="text-center animate-fade-in-up">
                    <h2 className="heading-font text-6xl md:text-8xl font-black text-[var(--deep-blue)] mb-6 leading-tight">
                        {t.welcome}<br/>{t.title}
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-[var(--sunset-orange)] to-[var(--gold)] mx-auto mb-8"></div>
                    <p className="text-xl md:text-2xl text-[var(--earth-brown)] max-w-3xl mx-auto mb-12 leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    {t.cards.map((item, idx) => (
                        <div
                            key={idx}
                            className="card-hover bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border-2 border-[var(--gold)]/30 cursor-pointer transition-all"
                            style={{ animationDelay: `${idx * 0.2}s` }}
                            onClick={() => setActiveSection(item.section)}
                        >
                            <div className="text-6xl mb-4">{item.icon}</div>
                            <h3 className="heading-font text-2xl font-bold text-[var(--deep-blue)] mb-3">
                                {item.title}
                            </h3>
                            <p className="text-[var(--earth-brown)] text-lg mb-4">
                                {item.desc}
                            </p>
                            <div className="text-[var(--sunset-orange)] font-semibold text-sm">
                                {language === 'en' ? 'Explore →' : language === 'mn' ? 'Судлах →' : '探索する →'}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Nomadic Life Section
const NomadicSection = ({ language }) => {
    const [selectedPart, setSelectedPart] = useState(null);

    const content = {
        en: {
            title: 'Nomadic Lifestyle & Yurts',
            intro: 'For millennia, Mongolian nomads have lived in harmony with the vast steppes, moving seasonally with their livestock. The ger (yurt) is the perfect home for this lifestyle - portable, durable, and adaptable to the harsh climate.',
            migration: 'Seasonal Migration',
            seasons: [
                { emoji: '❄️', title: 'Winter:', desc: 'Sheltered valleys with protection from wind' },
                { emoji: '🌸', title: 'Spring:', desc: 'Move to fresh pastures as snow melts' },
                { emoji: '☀️', title: 'Summer:', desc: 'High mountain meadows with lush grass' },
                { emoji: '🍂', title: 'Autumn:', desc: 'Prepare for winter, fatten livestock' }
            ],
            yurtTitle: 'Interactive Yurt (Click Parts)',
            fiveSnoutsTitle: 'Five Snouts',
            fiveSnoutsDesc: 'Traditional Mongolian herding revolves around the "five snouts" (tavan khoshuu mod): horses, cattle, camels, sheep, and goats. Each animal serves a specific purpose and together they provide everything needed for survival - food, clothing, shelter, and transportation.'
        },
        mn: {
            title: 'Нүүдлийн амьдрал ба гэр',
            intro: 'Олон мянган жилийн турш монгол нүүдэлчид уужим талын нутагт өөрийн малын сүрэгтэй хамт улирлын шилжилт хийн амьдарч ирсэн. Гэр бол энэ амьдралын хэв маягт тохирсон төгс орон сууц - зөөлөн, бат бөх, хатуу уур амьсгалд зохицдог.',
            migration: 'Улирлын нүүдэл',
            seasons: [
                { emoji: '❄️', title: 'Өвөл:', desc: 'Салхинаас хамгаалагдсан хөндий' },
                { emoji: '🌸', title: 'Хавар:', desc: 'Цас хайлахад шинэ бэлчээр рүү нүүнэ' },
                { emoji: '☀️', title: 'Зун:', desc: 'Өндөр уулын ногоон бэлчээр' },
                { emoji: '🍂', title: 'Намар:', desc: 'Өвөлд бэлдэх, мал тарган' }
            ],
            yurtTitle: 'Харилцан үйлчлэлт гэр (хэсгийг дарна уу)',
            fiveSnoutsTitle: 'Таван хошуу мал',
            fiveSnoutsDesc: 'Монголын уламжлалт мал аж ахуй нь "таван хошуу мал" дээр суурилдаг: адуу, үхэр, тэмээ, хонь, ямаа. Мал бүр өөрийн зориулалттай бөгөөд эдгээр нь хамтдаа амьдралд шаардлагатай бүхнийг - хоол, хувцас, орон сууц, тээвэр хэрэгслийг хангадаг.'
        },
        ja: {
            title: '遊牧生活とゲル',
            intro: '何千年もの間、モンゴルの遊牧民は広大な草原と調和して生活し、家畜と共に季節ごとに移動してきました。ゲル（ユルト）は、この生活様式に最適な住居であり、持ち運び可能で、耐久性があり、厳しい気候に適応できます。',
            migration: '季節の移動',
            seasons: [
                { emoji: '❄️', title: '冬：', desc: '風から守られた谷' },
                { emoji: '🌸', title: '春：', desc: '雪が溶けると新鮮な牧草地へ移動' },
                { emoji: '☀️', title: '夏：', desc: '緑豊かな高山の草原' },
                { emoji: '🍂', title: '秋：', desc: '冬の準備、家畜を太らせる' }
            ],
            yurtTitle: 'インタラクティブゲル（パーツをクリック）',
            fiveSnoutsTitle: '五畜',
            fiveSnoutsDesc: '伝統的なモンゴルの牧畜は「五畜」を中心に行われます：馬、牛、ラクダ、羊、ヤギ。それぞれの動物に特定の目的があり、一緒に生存に必要なすべて - 食料、衣服、住居、輸送手段を提供します。'
        }
    };

    const yurtParts = {
        en: {
            crown: {
                name: 'Toono (Crown)',
                desc: 'The circular wooden crown at the top serves as a chimney and skylight. It represents the sun and is considered the most sacred part of the ger.'
            },
            walls: {
                name: 'Khana (Walls)',
                desc: 'Expandable lattice walls made of willow wood. Typically 4-6 sections form a circular structure that can be easily assembled and disassembled.'
            },
            roof: {
                name: 'Uni (Roof Poles)',
                desc: 'Roof poles connect the crown to the walls. Usually 81 poles, a sacred number in Mongolian culture, representing unity.'
            },
            door: {
                name: 'Üüd (Door)',
                desc: 'Always faces south to catch sunlight and avoid harsh northern winds. Decorated with traditional patterns and painted bright colors.'
            },
            covering: {
                name: 'Felt Covering',
                desc: 'Made from sheep wool, providing excellent insulation. Multiple layers keep the interior warm in winter and cool in summer.'
            }
        },
        mn: {
            crown: {
                name: 'Тооно',
                desc: 'Дээд талын дугуй модон тооно нь яндан, гэрлийн цонх болдог. Нарыг илэрхийлдэг бөгөөд гэрийн хамгийн ариун хэсэг гэж тооцогддог.'
            },
            walls: {
                name: 'Хана',
                desc: 'Бургасан модоор хийсэн өргөдөг сүлжээт хана. Ихэвчлэн 4-6 хэсэг дугуй хэлбэрийг бүрдүүлж, амархан угсарч задалж болдог.'
            },
            roof: {
                name: 'Уни (Дээврийн мод)',
                desc: 'Дээврийн мод тооног хананд холбодог. Ихэвчлэн 81 мод байдаг нь монголын соёлд ариун тоо бөгөөд эв нэгдлийг илэрхийлдэг.'
            },
            door: {
                name: 'Үүд (Хаалга)',
                desc: 'Үргэлж урагш чиглэдэг нь нарны гэрлийг авч, хойд зүгийн хүчтэй салхинаас зайлсхийх. Уламжлалт хээ угалзаар чимэглэгдсэн, тод өнгөөр будагдсан.'
            },
            covering: {
                name: 'Эсгий бүрээс',
                desc: 'Хонины ноосоор хийсэн, маш сайн дулаалга өгдөг. Олон давхар нь өвөл дулаан, зун сэрүүн байлгадаг.'
            }
        },
        ja: {
            crown: {
                name: 'トーノ（天窓）',
                desc: '頂上の円形の木製の冠は煙突と天窓の役割を果たします。太陽を表し、ゲルの最も神聖な部分と考えられています。'
            },
            walls: {
                name: 'ハナ（壁）',
                desc: 'ヤナギの木で作られた伸縮可能な格子壁。通常4〜6のセクションが円形の構造を形成し、簡単に組み立てたり解体したりできます。'
            },
            roof: {
                name: 'ウニ（屋根ポール）',
                desc: '屋根のポールは天窓と壁を接続します。通常81本のポールがあり、モンゴル文化では神聖な数字で、統一を表します。'
            },
            door: {
                name: 'ウード（ドア）',
                desc: '常に南を向いて日光を取り入れ、厳しい北風を避けます。伝統的な模様で装飾され、明るい色で塗られています。'
            },
            covering: {
                name: 'フェルトカバー',
                desc: '羊毛で作られ、優れた断熱性を提供します。複数の層が冬は暖かく、夏は涼しく保ちます。'
            }
        }
    };

    const t = content[language];
    const parts = yurtParts[language];

    return (
        <div className="min-h-screen px-6 pt-32 pb-16 section-enter">
            <div className="max-w-6xl mx-auto">
                <h2 className="heading-font text-5xl md:text-6xl font-black text-[var(--deep-blue)] mb-6">
                    {t.title}
                </h2>
                <div className="w-24 h-1 bg-[var(--sunset-orange)] mb-12"></div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <p className="text-xl text-[var(--earth-brown)] mb-6 leading-relaxed">
                            {t.intro}
                        </p>
                        <div className="bg-white/80 p-6 rounded-xl border-2 border-[var(--gold)]/40">
                            <h3 className="heading-font text-2xl font-bold text-[var(--deep-blue)] mb-4">
                                {t.migration}
                            </h3>
                            <ul className="space-y-3 text-lg">
                                {t.seasons.map((season, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-[var(--sunset-orange)] mr-3 text-2xl">{season.emoji}</span>
                                        <span><strong>{season.title}</strong> {season.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white/80 p-8 rounded-2xl border-pattern shadow-xl">
                        <h3 className="heading-font text-2xl font-bold text-[var(--deep-blue)] mb-6 text-center">
                            {t.yurtTitle}
                        </h3>
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            {/* Simplified yurt illustration */}
                            <svg viewBox="0 0 300 300" className="w-full h-full">
                                {/* Roof/Crown */}
                                <circle
                                    cx="150" cy="80" r="25"
                                    fill="var(--gold)"
                                    className="yurt-part"
                                    onClick={() => setSelectedPart('crown')}
                                />

                                {/* Roof poles */}
                                <path
                                    d="M 150 105 L 80 170 M 150 105 L 220 170 M 150 105 L 150 170 M 150 105 L 110 170 M 150 105 L 190 170"
                                    stroke="var(--earth-brown)"
                                    strokeWidth="3"
                                    fill="none"
                                    className="yurt-part"
                                    onClick={() => setSelectedPart('roof')}
                                />

                                {/* Walls */}
                                <path
                                    d="M 70 170 L 70 240 L 230 240 L 230 170 Z"
                                    fill="var(--steppe-tan)"
                                    stroke="var(--earth-brown)"
                                    strokeWidth="2"
                                    className="yurt-part"
                                    onClick={() => setSelectedPart('walls')}
                                />

                                {/* Door */}
                                <rect
                                    x="130" y="190"
                                    width="40" height="50"
                                    fill="var(--sunset-orange)"
                                    stroke="var(--earth-brown)"
                                    strokeWidth="2"
                                    className="yurt-part"
                                    onClick={() => setSelectedPart('door')}
                                />

                                {/* Felt covering indicator */}
                                <path
                                    d="M 80 170 Q 150 140 220 170"
                                    fill="var(--cream)"
                                    opacity="0.7"
                                    className="yurt-part"
                                    onClick={() => setSelectedPart('covering')}
                                />
                            </svg>
                        </div>

                        {selectedPart && (
                            <div className="mt-6 p-4 bg-gradient-to-r from-[var(--sky-blue)]/20 to-[var(--gold)]/20 rounded-lg animate-slide-in">
                                <h4 className="heading-font text-xl font-bold text-[var(--deep-blue)] mb-2">
                                    {parts[selectedPart].name}
                                </h4>
                                <p className="text-[var(--earth-brown)]">
                                    {parts[selectedPart].desc}
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-gradient-to-r from-[var(--deep-blue)] to-[var(--earth-brown)] text-white p-8 rounded-2xl shadow-xl">
                    <h3 className="heading-font text-3xl font-bold mb-4">{t.fiveSnoutsTitle}</h3>
                    <p className="text-lg leading-relaxed">
                        {t.fiveSnoutsDesc}
                    </p>
                </div>
            </div>
        </div>
    );
};

// Language Section
const LanguageSection = ({ language }) => {
    const [selectedChar, setSelectedChar] = useState(null);

    const content = {
        en: {
            title: 'Mongolian Language & Script',
            intro: 'The traditional Mongolian script is one of the world\'s few vertical writing systems, written from top to bottom in columns running left to right. Dating back to the 13th century, it was adapted from the Uyghur alphabet during Genghis Khan\'s era.',
            featuresTitle: 'Script Features',
            features: [
                { emoji: '↓', title: 'Vertical orientation:', desc: 'Written top to bottom' },
                { emoji: '⟿', title: 'Cursive connection:', desc: 'Letters flow together' },
                { emoji: '✏️', title: 'Position variants:', desc: 'Letter shapes change based on position' },
                { emoji: '🔄', title: 'Still used:', desc: 'Official script in Inner Mongolia' }
            ],
            modernTitle: 'Modern Mongolian',
            modernDesc: 'Since 1941, Mongolia has primarily used the Cyrillic alphabet, though there are ongoing efforts to revive the traditional script alongside the modern writing system.',
            charsTitle: 'Traditional Script Characters',
            charsHint: '(Click any character to learn more)',
            phrasesTitle: 'Common Phrases'
        },
        mn: {
            title: 'Монгол хэл бичиг',
            intro: 'Уламжлалт монгол бичиг нь дэлхийн цөөн хэдэн босоо бичих системүүдийн нэг бөгөөд дээрээс доош, зүүнээс баруун тийш баганаар бичигддэг. 13-р зуунаас эхэлсэн энэ бичгийг Чингис хааны үед Уйгур үсгээс дасан зохицуулсан.',
            featuresTitle: 'Бичгийн онцлог',
            features: [
                { emoji: '↓', title: 'Босоо чиглэл:', desc: 'Дээрээс доош бичигддэг' },
                { emoji: '⟿', title: 'Залгамж холбоо:', desc: 'Үсэг үсгээрээ холбогддог' },
                { emoji: '✏️', title: 'Байрлалын хувилбар:', desc: 'Үсгийн хэлбэр байрлалаасаа хамаарч өөрчлөгддөг' },
                { emoji: '🔄', title: 'Одоо ч хэрэглэгддэг:', desc: 'Өвөр Монголын албан ёсны бичиг' }
            ],
            modernTitle: 'Орчин үеийн монгол бичиг',
            modernDesc: '1941 оноос хойш Монгол улс кирилл цагаан толгойг голлон хэрэглэж байгаа ч уламжлалт бичгийг орчин үеийн бичгийн системтэй зэрэгцүүлэн сэргээх оролдлого хийгдэж байна.',
            charsTitle: 'Уламжлалт бичгийн үсэг',
            charsHint: '(Үсэг дээр дарж дэлгэрэнгүйг үзнэ үү)',
            phrasesTitle: 'Түгээмэл хэллэг'
        },
        ja: {
            title: 'モンゴル言語と文字',
            intro: '伝統的なモンゴル文字は、世界でも数少ない縦書き文字体系の一つで、上から下へ、左から右へ列を作って書かれます。13世紀に遡り、チンギス・カン時代にウイグル文字から採用されました。',
            featuresTitle: '文字の特徴',
            features: [
                { emoji: '↓', title: '縦書き:', desc: '上から下へ書く' },
                { emoji: '⟿', title: '筆記体接続:', desc: '文字が流れるように繋がる' },
                { emoji: '✏️', title: '位置による変形:', desc: '文字の形は位置によって変わる' },
                { emoji: '🔄', title: '現在も使用:', desc: '内モンゴルの公式文字' }
            ],
            modernTitle: '現代モンゴル語',
            modernDesc: '1941年以来、モンゴルは主にキリル文字を使用していますが、現代の書記体系と並行して伝統的な文字を復活させる取り組みが続いています。',
            charsTitle: '伝統的な文字',
            charsHint: '（文字をクリックして詳細を見る）',
            phrasesTitle: 'よく使われるフレーズ'
        }
    };

    const mongolianChars = [
        { char: 'ᠠ', latin: 'a', sound: 'ah', example: 'ᠠᠪᠠ (aba) - father', cyrillic: 'а' },
        { char: 'ᠡ', latin: 'e', sound: 'eh', example: 'ᠡᠵᠢ (eji) - mother', cyrillic: 'э' },
        { char: 'ᠢ', latin: 'i', sound: 'ee', example: 'ᠢᠮᠠᠭᠠ (imaga) - goat', cyrillic: 'и' },
        { char: 'ᠣ', latin: 'o', sound: 'oh', example: 'ᠣᠷᠤᠨ (orun) - country', cyrillic: 'о' },
        { char: 'ᠤ', latin: 'u', sound: 'oo', example: 'ᠤᠯᠠᠭᠠᠨ (ulagan) - red', cyrillic: 'у' },
        { char: 'ᠥ', latin: 'ö', sound: 'ö', example: 'ᠥᠪᠥᠷ (öbör) - south', cyrillic: 'ө' },
        { char: 'ᠦ', latin: 'ü', sound: 'ü', example: 'ᠦᠭᠡ (üge) - word', cyrillic: 'ү' },
        { char: 'ᠮ', latin: 'm', sound: 'mm', example: 'ᠮᠣᠷᠢ (mori) - horse', cyrillic: 'м' },
        { char: 'ᠨ', latin: 'n', sound: 'nn', example: 'ᠨᠠᠷᠠ (nara) - sun', cyrillic: 'н' },
        { char: 'ᠷ', latin: 'r', sound: 'rr', example: 'ᠠᠷᠠᠳ (arad) - people', cyrillic: 'р' },
        { char: 'ᠪ', latin: 'b', sound: 'b', example: 'ᠪᠠᠭᠠ (baga) - small', cyrillic: 'б' },
        { char: 'ᠬ', latin: 'h/kh', sound: 'kh', example: 'ᠬᠣᠨᠢᠨ (khonin) - sheep', cyrillic: 'х' },
        { char: 'ᠭ', latin: 'g', sound: 'g', example: 'ᠭᠡᠷ (ger) - home', cyrillic: 'г' }
    ];

    const phrases = {
        en: [
            { mongolian: 'Сайн байна уу?', english: 'Hello / How are you?', pronunciation: 'Sain baina uu?' },
            { mongolian: 'Баярлалаа', english: 'Thank you', pronunciation: 'Bayarlalaa' },
            { mongolian: 'Та хэн бэ?', english: 'Who are you?', pronunciation: 'Ta khen be?' },
            { mongolian: 'Би монгол хүн', english: 'I am Mongolian', pronunciation: 'Bi mongol khun' }
        ],
        mn: [
            { mongolian: 'Сайн байна уу?', english: 'Мэндчилгээ / Юу байна?', pronunciation: 'Сайн байна уу?' },
            { mongolian: 'Баярлалаа', english: 'Талархал', pronunciation: 'Баярлалаа' },
            { mongolian: 'Та хэн бэ?', english: 'Та хэн бэ?', pronunciation: 'Та хэн бэ?' },
            { mongolian: 'Би монгол хүн', english: 'Би монгол хүн', pronunciation: 'Би монгол хүн' }
        ],
        ja: [
            { mongolian: 'Сайн байна уу?', english: 'こんにちは / お元気ですか？', pronunciation: 'サイン・バイナ・ウー?' },
            { mongolian: 'Баярлалаа', english: 'ありがとう', pronunciation: 'バヤルラー' },
            { mongolian: 'Та хэн бэ?', english: 'あなたは誰ですか？', pronunciation: 'タ・ヘン・ベ?' },
            { mongolian: 'Би монгол хүн', english: '私はモンゴル人です', pronunciation: 'ビ・モンゴル・フン' }
        ]
    };

    const t = content[language];
    const p = phrases[language];

    return (
        <div className="min-h-screen px-6 pt-32 pb-16 section-enter">
            <div className="max-w-6xl mx-auto">
                <h2 className="heading-font text-5xl md:text-6xl font-black text-[var(--deep-blue)] mb-6">
                    {t.title}
                </h2>
                <div className="w-24 h-1 bg-[var(--sunset-orange)] mb-12"></div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <p className="text-xl text-[var(--earth-brown)] mb-6 leading-relaxed">
                            {t.intro}
                        </p>

                        <div className="bg-white/80 p-6 rounded-xl border-2 border-[var(--gold)]/40 mb-6">
                            <h3 className="heading-font text-2xl font-bold text-[var(--deep-blue)] mb-4">
                                {t.featuresTitle}
                            </h3>
                            <ul className="space-y-3 text-lg">
                                {t.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-[var(--sunset-orange)] mr-3 text-xl">{feature.emoji}</span>
                                        <span><strong>{feature.title}</strong> {feature.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[var(--deep-blue)] to-[var(--sunset-orange)] text-white p-6 rounded-xl">
                            <h3 className="heading-font text-2xl font-bold mb-3">
                                {t.modernTitle}
                            </h3>
                            <p className="text-lg">
                                {t.modernDesc}
                            </p>
                        </div>

                        <div className="bg-white/80 p-6 rounded-xl border-2 border-[var(--gold)]/40 mt-6">
                            <h3 className="heading-font text-xl font-bold text-[var(--deep-blue)] mb-3">
                                {language === 'en' ? 'Special Mongolian Cyrillic Letters' : language === 'mn' ? 'Монголын онцгой кирилл үсэг' : 'モンゴル特有のキリル文字'}
                            </h3>
                            <p className="text-[var(--earth-brown)] mb-4">
                                {language === 'en' ? 'Mongolian Cyrillic has two letters not found in Russian Cyrillic:' : language === 'mn' ? 'Монголын кирилл нь орос кириллээс ялгаатай хоёр үсэгтэй:' : 'モンゴルのキリル文字には、ロシアのキリル文字にはない2つの文字があります：'}
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-gradient-to-br from-[var(--cream)] to-white rounded-lg border-2 border-[var(--sunset-orange)]/30">
                                    <div className="text-5xl font-bold text-[var(--sunset-orange)] text-center mb-2">Ө ө</div>
                                    <p className="text-center text-sm">
                                        <strong>{language === 'en' ? 'Sound:' : language === 'mn' ? 'Дуудлага:' : '音:'}</strong> ö {language === 'en' ? '(like German ö)' : language === 'mn' ? '(германы ö шиг)' : '(ドイツ語のöのように)'}
                                    </p>
                                </div>
                                <div className="p-4 bg-gradient-to-br from-[var(--cream)] to-white rounded-lg border-2 border-[var(--sunset-orange)]/30">
                                    <div className="text-5xl font-bold text-[var(--sunset-orange)] text-center mb-2">Ү ү</div>
                                    <p className="text-center text-sm">
                                        <strong>{language === 'en' ? 'Sound:' : language === 'mn' ? 'Дуудлага:' : '音:'}</strong> ü {language === 'en' ? '(like German ü)' : language === 'mn' ? '(германы ü шиг)' : '(ドイツ語のüのように)'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-white/80 p-8 rounded-2xl border-pattern shadow-xl mb-6">
                            <h3 className="heading-font text-2xl font-bold text-[var(--deep-blue)] mb-6 text-center">
                                {t.charsTitle}
                            </h3>
                            <p className="text-center text-sm text-[var(--earth-brown)] mb-6">
                                {t.charsHint}
                            </p>
                            <div className="grid grid-cols-4 gap-4 mb-6">
                                {mongolianChars.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="script-char text-center p-4 bg-gradient-to-b from-[var(--cream)] to-white rounded-lg border-2 border-[var(--gold)]/30"
                                        onClick={() => setSelectedChar(item)}
                                    >
                                        <div className="text-5xl mb-2 text-[var(--deep-blue)]">{item.char}</div>
                                        <div className="heading-font text-lg font-bold text-[var(--earth-brown)]">
                                            {item.latin}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {selectedChar && (
                                <div className="p-4 bg-gradient-to-r from-[var(--sky-blue)]/20 to-[var(--gold)]/20 rounded-lg animate-slide-in">
                                    <div className="text-6xl text-center mb-3 text-[var(--deep-blue)]">{selectedChar.char}</div>
                                    <p className="text-center text-lg mb-2">
                                        <strong>Romanization:</strong> {selectedChar.latin}
                                    </p>
                                    <p className="text-center text-lg mb-2">
                                        <strong>Sound:</strong> {selectedChar.sound}
                                    </p>
                                    <p className="text-center text-lg mb-2">
                                        <strong>Modern Cyrillic:</strong> <span className="text-2xl font-bold text-[var(--sunset-orange)]">{selectedChar.cyrillic}</span>
                                    </p>
                                    <p className="text-center text-[var(--earth-brown)]">
                                        <strong>Example:</strong> {selectedChar.example}
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="bg-white/80 p-6 rounded-xl border-2 border-[var(--gold)]/40">
                            <h3 className="heading-font text-xl font-bold text-[var(--deep-blue)] mb-4">
                                {t.phrasesTitle}
                            </h3>
                            <div className="space-y-4">
                                {p.map((phrase, idx) => (
                                    <div key={idx} className="p-4 bg-[var(--cream)] rounded-lg">
                                        <div className="text-xl font-bold text-[var(--deep-blue)] mb-1">
                                            {phrase.mongolian}
                                        </div>
                                        <div className="text-[var(--earth-brown)] text-sm mb-1">
                                            {phrase.pronunciation}
                                        </div>
                                        <div className="text-[var(--earth-brown)]">
                                            {phrase.english}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Shagai Game Section
const ShagaiSection = ({ language }) => {
    const [dice, setDice] = useState([]);
    const [rolling, setRolling] = useState(false);
    const [collected, setCollected] = useState({ horse: false, sheep: false, goat: false, camel: false });
    const [rolls, setRolls] = useState(0);
    const [gameWon, setGameWon] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    const content = {
        en: {
            title: 'Dörwön Berh - Four Knucklebones',
            intro: 'Dörwön Berh (Four Knucklebones) is a traditional Mongolian game played with four sheep ankle bones. The challenge is to roll all four different animals in a SINGLE throw - one Horse, one Sheep, one Goat, and one Camel. This is a game of pure luck and is considered very difficult!',
            howToPlay: 'How to Play',
            rules: [
                'Roll all 4 shagai at once',
                'GOAL: Get all 4 different animals in ONE single roll',
                'Each animal must appear exactly once',
                'Keep trying until you achieve Dörwön Berh!',
                'Challenge: How many rolls will it take?'
            ],
            sidesTitle: 'The Four Animals (Дөрвөн Бэрх)',
            rollButton: 'Roll Shagai',
            resetButton: 'New Game',
            collectionTitle: 'This Roll Shows',
            rollsCount: 'Attempts',
            needToCollect: 'Not in this roll',
            collected: 'In this roll!',
            youWin: '🎉 DÖRWÖN BERH! You got all four different animals in one roll!',
            tryAgain: 'Try to beat your record!'
        },
        mn: {
            title: 'Дөрвөн Бэрх',
            intro: 'Дөрвөн Бэрх бол дөрвөн шагайгаар тоглодог монголын уламжлалт тоглоом юм. Сорилт нь НЭГ удаа шидэхэд дөрвөн өөр малыг бүгдийг авах явдал - нэг морь, нэг хонь, нэг ямаа, нэг тэмээ. Энэ бол цэвэр азын тоглоом бөгөөд маш хэцүү тоглоом гэж тооцогддог!',
            howToPlay: 'Тоглох заавар',
            rules: [
                '4 шагайг нэг дор шидэнэ',
                'ЗОРИЛГО: НЭГ удаа шидэхэд дөрвөн өөр малыг авах',
                'Мал бүр яг нэг удаа гарах ёстой',
                'Дөрвөн Бэрх хүртэл оролдсоор байна!',
                'Сорилт: Хэдэн шидэлтээр авах вэ?'
            ],
            sidesTitle: 'Дөрвөн Мал (Дөрвөн Бэрх)',
            rollButton: 'Шагай шидэх',
            resetButton: 'Шинэ тоглоом',
            collectionTitle: 'Энэ шидэлтэд',
            rollsCount: 'Оролдлого',
            needToCollect: 'Энэ шидэлтэд үгүй',
            collected: 'Энэ шидэлтэд бий!',
            youWin: '🎉 ДӨРВӨН БЭРХ! Та нэг удаа шидэхэд дөрвөн өөр малыг авлаа!',
            tryAgain: 'Өөрийн рекордоо эвдэхийг оролдоорой!'
        },
        ja: {
            title: 'ドルボン・ベルフ - 四つの距骨',
            intro: 'ドルボン・ベルフ（四つの距骨）は、4つの羊の距骨を使って遊ぶモンゴルの伝統的なゲームです。挑戦は、1回の投げで4種類すべての異なる動物を出すこと - 馬1つ、羊1つ、ヤギ1つ、ラクダ1つ。これは純粋な運のゲームで、非常に難しいとされています！',
            howToPlay: '遊び方',
            rules: [
                '4つのシャガイを一度に振る',
                '目標：1回の投げで4種類すべての異なる動物を出す',
                '各動物は正確に1回ずつ現れる必要がある',
                'ドルボン・ベルフが出るまで挑戦し続ける！',
                'チャレンジ：何回で出せるか？'
            ],
            sidesTitle: '4つの動物（ドルボン・ベルフ）',
            rollButton: 'シャガイを振る',
            resetButton: '新しいゲーム',
            collectionTitle: 'この投げの結果',
            rollsCount: '試行回数',
            needToCollect: 'この投げにない',
            collected: 'この投げにある！',
            youWin: '🎉 ドルボン・ベルフ！1回の投げで4種類すべての異なる動物が出ました！',
            tryAgain: '記録を破ってみよう！'
        }
    };

    const sides = {
        en: [
            { name: 'Horse', mongolian: 'Морь', emoji: '🐴', key: 'horse', desc: 'Convex side - represents speed and nobility' },
            { name: 'Sheep', mongolian: 'Хонь', emoji: '🐑', key: 'sheep', desc: 'Concave side - represents wealth and prosperity' },
            { name: 'Goat', mongolian: 'Ямаа', emoji: '🐐', key: 'goat', desc: 'Flat side - represents agility and mountain dwelling' },
            { name: 'Camel', mongolian: 'Тэмээ', emoji: '🐫', key: 'camel', desc: 'Lateral side - represents endurance and desert travel' }
        ],
        mn: [
            { name: 'Морь', mongolian: 'Морь', emoji: '🐴', key: 'horse', desc: 'Дээд тал - хурд, эрэлхэг байдлыг илэрхийлнэ' },
            { name: 'Хонь', mongolian: 'Хонь', emoji: '🐑', key: 'sheep', desc: 'Доод тал - баялаг, хөгжил дэвшлийг илэрхийлнэ' },
            { name: 'Ямаа', mongolian: 'Ямаа', emoji: '🐐', key: 'goat', desc: 'Хажуу тал - уян хатан, уулархаг нутагт амьдардаг' },
            { name: 'Тэмээ', mongolian: 'Тэмээ', emoji: '🐫', key: 'camel', desc: 'Өөр хажуу тал - тэсвэр тэвчээр, цөлөөр аялдаг' }
        ],
        ja: [
            { name: '馬', mongolian: 'Морь', emoji: '🐴', key: 'horse', desc: '凸面 - 速さと気高さを表す' },
            { name: '羊', mongolian: 'Хонь', emoji: '🐑', key: 'sheep', desc: '凹面 - 富と繁栄を表す' },
            { name: 'ヤギ', mongolian: 'Ямаа', emoji: '🐐', key: 'goat', desc: '平面 - 俊敏さと山岳生活を表す' },
            { name: 'ラクダ', mongolian: 'Тэмээ', emoji: '🐫', key: 'camel', desc: '側面 - 耐久力と砂漠の旅を表す' }
        ]
    };

    const t = content[language];
    const s = sides[language];

    const rollDice = () => {
        if (rolling) return;

        setRolling(true);
        if (!gameStarted) setGameStarted(true);

        // Simulate rolling animation
        const rollInterval = setInterval(() => {
            const randomDice = Array(4).fill(0).map(() => Math.floor(Math.random() * 4));
            setDice(randomDice);
        }, 100);

        // Final result after 1 second
        setTimeout(() => {
            clearInterval(rollInterval);
            const finalDice = Array(4).fill(0).map(() => Math.floor(Math.random() * 4));
            setDice(finalDice);
            setRolls(prev => prev + 1);

            // Check THIS ROLL for all 4 different animals
            const uniqueAnimals = new Set(finalDice);
            const thisRollAnimals = { horse: false, sheep: false, goat: false, camel: false };

            finalDice.forEach(d => {
                const animal = s[d].key;
                thisRollAnimals[animal] = true;
            });

            setCollected(thisRollAnimals);

            // Win only if THIS SINGLE ROLL has all 4 different animals (Dörwön Berh!)
            if (uniqueAnimals.size === 4) {
                setGameWon(true);
            }

            setRolling(false);
        }, 1000);
    };

    const resetGame = () => {
        setDice([]);
        setCollected({ horse: false, sheep: false, goat: false, camel: false });
        setRolls(0);
        setGameWon(false);
        setGameStarted(false);
    };

    return (
        <div className="min-h-screen px-6 pt-32 pb-16 section-enter">
            <div className="max-w-6xl mx-auto">
                <h2 className="heading-font text-5xl md:text-6xl font-black text-[var(--deep-blue)] mb-6">
                    {t.title}
                </h2>
                <div className="w-24 h-1 bg-[var(--sunset-orange)] mb-12"></div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <p className="text-xl text-[var(--earth-brown)] mb-6 leading-relaxed">
                            {t.intro}
                        </p>

                        <div className="bg-white/80 p-6 rounded-xl border-2 border-[var(--gold)]/40 mb-6">
                            <h3 className="heading-font text-2xl font-bold text-[var(--deep-blue)] mb-4">
                                {t.howToPlay}
                            </h3>
                            <ul className="space-y-3">
                                {t.rules.map((rule, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-[var(--sunset-orange)] mr-3 text-xl font-bold">{idx + 1}.</span>
                                        <span className="text-[var(--earth-brown)]">{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[var(--deep-blue)] to-[var(--earth-brown)] text-white p-6 rounded-xl">
                            <h3 className="heading-font text-2xl font-bold mb-4">{t.sidesTitle}</h3>
                            <div className="space-y-3">
                                {s.map((side, idx) => (
                                    <div key={idx} className="flex items-start gap-3 bg-white/10 p-3 rounded-lg">
                                        <span className="text-3xl">{side.emoji}</span>
                                        <div>
                                            <div className="font-bold">{side.name}</div>
                                            <div className="text-sm opacity-90">{side.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-24">
                        <div className="bg-white/80 p-8 rounded-2xl border-pattern shadow-xl mb-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="heading-font text-2xl font-bold text-[var(--deep-blue)]">
                                    {language === 'en' ? 'Roll Result' : language === 'mn' ? 'Шидсэн үр дүн' : '結果'}
                                </h3>
                                {gameStarted && (
                                    <div className="text-right">
                                        <div className="text-3xl font-bold text-[var(--sunset-orange)]">{rolls}</div>
                                        <div className="text-sm text-[var(--earth-brown)]">{t.rollsCount}</div>
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-4 gap-4 mb-6 min-h-[120px] items-center justify-items-center">
                                {dice.length === 0 ? (
                                    <div className="col-span-4 text-center text-[var(--earth-brown)] opacity-60">
                                        {language === 'en' ? 'Click "Roll Shagai" to start!' : language === 'mn' ? 'Эхлэхийн тулд "Шагай шидэх" дарна уу!' : '「シャガイを振る」をクリックして開始！'}
                                    </div>
                                ) : (
                                    dice.map((d, idx) => (
                                        <div
                                            key={idx}
                                            className={`text-6xl ${rolling ? 'animate-bounce' : 'animate-scale-in'}`}
                                            style={{ animationDelay: `${idx * 0.1}s` }}
                                        >
                                            {s[d].emoji}
                                        </div>
                                    ))
                                )}
                            </div>

                            <button
                                onClick={rollDice}
                                disabled={rolling || gameWon}
                                className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                                    rolling || gameWon
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-[var(--sunset-orange)] to-[var(--gold)] text-white hover:shadow-xl hover:scale-105 active:scale-95'
                                }`}
                            >
                                {rolling ? '🎲 ...' : gameWon ? '✅ ' + (language === 'en' ? 'Won!' : language === 'mn' ? 'Ялалт!' : '勝利！') : `🎲 ${t.rollButton}`}
                            </button>
                        </div>

                        {gameWon && (
                            <div className="bg-gradient-to-br from-green-400 to-green-600 text-white p-8 rounded-2xl shadow-xl animate-fade-in-up">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🎉</div>
                                    <h3 className="heading-font text-3xl font-bold mb-4">
                                        {t.youWin}
                                    </h3>
                                    <div className="text-5xl font-bold mb-2">
                                        {rolls}
                                    </div>
                                    <div className="text-xl mb-6">
                                        {t.rollsCount}
                                    </div>
                                    <p className="text-lg mb-6">{t.tryAgain}</p>
                                    <button
                                        onClick={resetGame}
                                        className="px-8 py-4 rounded-xl font-bold text-lg bg-white text-green-600 hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
                                    >
                                        🔄 {t.resetButton}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-gradient-to-r from-[var(--deep-blue)] to-[var(--earth-brown)] text-white p-8 rounded-2xl shadow-xl">
                    <h3 className="heading-font text-2xl font-bold mb-4">
                        {language === 'en' ? 'Cultural Significance' : language === 'mn' ? 'Соёлын ач холбогдол' : '文化的意義'}
                    </h3>
                    <p className="text-lg leading-relaxed mb-4">
                        {language === 'en'
                            ? 'Dörwön Berh is one of the most challenging traditional Mongolian games. Getting all four different animals in a single roll is considered very lucky and difficult - with only a 3/32 (about 9.4%) chance! The game has been played by nomadic families for over 2,000 years, teaching children about probability and the four types of livestock.'
                            : language === 'mn'
                                ? 'Дөрвөн Бэрх бол монголын хамгийн хэцүү уламжлалт тоглоомуудын нэг юм. Нэг удаа шидэхэд дөрвөн өөр малыг авах нь маш азтай бөгөөд хэцүү - ердөө 3/32 (ойролцоогоор 9.4%) магадлалтай! Энэ тоглоомыг нүүдэлчдийн гэр бүлүүд 2000 гаруй жилийн турш тоглож, хүүхдүүдэд магадлал болон дөрвөн төрлийн малын тухай заасаар ирсэн.'
                                : 'ドルボン・ベルフは、最も難しいモンゴルの伝統的なゲームの1つです。1回の投げで4種類すべての異なる動物を出すのは非常に幸運で難しい - わずか3/32（約9.4%）の確率です！このゲームは2000年以上にわたって遊牧民の家族によってプレイされ、子供たちに確率と4種類の家畜について教えてきました。'}
                    </p>
                    <p className="text-lg leading-relaxed">
                        {language === 'en'
                            ? 'The average player takes 10-12 rolls to achieve Dörwön Berh. Getting it on the first try is considered extremely fortunate and is celebrated! Some players have reported trying over 50 times before succeeding. This game perfectly represents the nomadic philosophy that patience and persistence bring rewards.'
                            : language === 'mn'
                                ? 'Дундаж тоглогч Дөрвөн Бэрх авахын тулд 10-12 шидэлт хийдэг. Эхний оролдлогоор авах нь маш азтай гэж тооцогддог бөгөөд тэмдэглэгддэг! Зарим тоглогчид амжилтанд хүрэхээсээ өмнө 50 гаруй удаа оролдсон гэж мэдээлсэн. Энэ тоглоом нь тэвчээр, зүтгэл нь шагналаа авдаг гэсэн нүүдэлчдийн философийг төгс илэрхийлдэг.'
                                : '平均的なプレイヤーはドルボン・ベルフを達成するのに10〜12回の投げが必要です。初回で出すのは非常に幸運とされ、祝福されます！一部のプレイヤーは成功するまでに50回以上試したと報告しています。このゲームは、忍耐と粘り強さが報酬をもたらすという遊牧民の哲学を完璧に表しています。'}
                    </p>
                </div>
            </div>
        </div>
    );
};

// Music Section
const MusicSection = ({ language }) => {
    const [selectedInstrument, setSelectedInstrument] = useState(null);

    const content = {
        en: {
            title: 'Traditional Music',
            intro: 'Mongolian music reflects the vast landscapes and nomadic lifestyle of its people. From the haunting sounds of throat singing to the melancholic melodies of the horsehead fiddle, traditional music is deeply connected to nature, horses, and the spiritual world.',
            stylesTitle: 'Musical Styles',
            unescoTitle: 'UNESCO Recognition',
            unescoDesc: 'Both Mongolian throat singing (Khöömei) and the Morin Khuur have been recognized by UNESCO as Masterpieces of the Oral and Intangible Heritage of Humanity, preserving these ancient art forms for future generations.',
            note: '🎧 To truly experience Mongolian music, search for recordings of traditional throat singing and horsehead fiddle performances on music platforms.'
        },
        mn: {
            title: 'Уламжлалт хөгжим',
            intro: 'Монгол хөгжим нь уужим нутаг, нүүдлийн амьдралын хэв маягийг тусгадаг. Хөөмийн нууц дуунаас эхлээд морин хуурын гунигт аялгуу хүртэл, уламжлалт хөгжим нь байгаль, адуу, сүнслэг ертөнцтэй гүнээ холбоотой.',
            stylesTitle: 'Хөгжмийн төрөл',
            unescoTitle: 'ЮНЕСКО-гийн хамгаалалт',
            unescoDesc: 'Монголын хөөмий болон морин хуур хоёулаа ЮНЕСКО-гийн Хүн төрөлхтний аман болон биет бус соёлын өвийн гайхамшиг гэж хүлээн зөвшөөрөгдсөн бөгөөд эдгээр эртний урлагийн хэлбэрийг ирээдүй үедээ хадгалж үлдээх болно.',
            note: '🎧 Монголын хөгжмийг бодитоор мэдрэхийн тулд хөгжмийн платформ дээр уламжлалт хөөмий, морин хуурын тоглолтын бичлэгийг хайж үзээрэй.'
        },
        ja: {
            title: '伝統音楽',
            intro: 'モンゴルの音楽は、広大な景観と遊牧生活を反映しています。ホーミーの幽玄な音から馬頭琴の憂鬱なメロディーまで、伝統音楽は自然、馬、精神世界と深く結びついています。',
            stylesTitle: '音楽スタイル',
            unescoTitle: 'ユネスコ認定',
            unescoDesc: 'モンゴルのホーミーと馬頭琴の両方は、ユネスコによって人類の口承及び無形遺産の傑作として認定され、これらの古代芸術形式を将来の世代のために保存しています。',
            note: '🎧 モンゴル音楽を本当に体験するには、音楽プラットフォームで伝統的なホーミーと馬頭琴の演奏の録音を検索してください。'
        }
    };

    const instruments = {
        en: [
            {
                name: 'Morin Khuur',
                mongolian: 'Морин хуур',
                desc: 'The horsehead fiddle is Mongolia\'s national instrument. Its distinctive sound mimics a horse\'s neighing, and the carved horse head represents the deep connection between Mongolians and horses.',
                emoji: '🎻',
                features: ['Two strings', 'Horse hair bow', 'Carved horse head', 'Deep, resonant sound'],
                videoId: 'v4xZUr0BEfE'
            },
            {
                name: 'Khöömei',
                mongolian: 'Хөөмий',
                desc: 'Throat singing technique where a single person produces multiple pitches simultaneously. Different styles (Khoomei, Sygyt, Kargyraa) create haunting sounds that echo the vast landscapes.',
                emoji: '🗣️',
                features: ['Multiple pitches at once', 'Various styles', 'Ancient technique', 'UNESCO heritage'],
                videoId: 'p_5yt5IX38I'
            },
            {
                name: 'Yatga',
                mongolian: 'Ятга',
                desc: 'A traditional zither with 13-21 strings, played by plucking. It produces delicate, melodic sounds perfect for storytelling and accompanying long songs.',
                emoji: '🎼',
                features: ['13-21 strings', 'Plucked instrument', 'Melodic sound', 'Used in ensembles'],
                videoId: '5nL1uTlhR1w'
            },
            {
                name: 'Tovshuur',
                mongolian: 'Товшуур',
                desc: 'A two or three-stringed lute traditionally used by Western Mongolian ethnic groups. It has a distinctive twangy sound and is often played during celebrations.',
                emoji: '🪕',
                features: ['2-3 strings', 'Lute family', 'Rhythmic playing', 'Folk instrument'],
                videoId: 'WGl1DcC_kWQ'
            }
        ],
        mn: [
            {
                name: 'Морин хуур',
                mongolian: 'Морин хуур',
                desc: 'Морин хуур бол Монголын үндэсний хөгжмийн зэмсэг юм. Түүний өвөрмөц дуу нь адууны янцгаах дууг санагдуулдаг бөгөөд сийлсэн морины толгой нь монголчууд ба адууны хоорондын гүн холбоог илэрхийлдэг.',
                emoji: '🎻',
                features: ['Хоёр чавхдас', 'Адууны үсэн хөвч', 'Сийлсэн морины толгой', 'Гүн цуурайтай дуу'],
                videoId: 'v4xZUr0BEfE'
            },
            {
                name: 'Хөөмий',
                mongolian: 'Хөөмий',
                desc: 'Нэг хүн нэгэн зэрэг олон өнгө авиа гаргадаг хоолойн дуулах өвөрмөц арга техник юм. Янз бүрийн төрөл (хөөмий, сыгыт, каргыраа) нь уужим тал нутгийг цуурайтсан мэт онцгой авиа үүсгэдэг.',
                emoji: '🗣️',
                features: ['Нэгэн зэрэг олон өнгө авиа', 'Төрөл бүрийн хэв маяг', 'Эртний уламжлал', 'ЮНЕСКО-гийн өв'],
                videoId: 'p_5yt5IX38I'
            },
            {
                name: 'Ятга',
                mongolian: 'Ятга',
                desc: '13–21 чавхдастай уламжлалт татлагат хөгжмийн зэмсэг бөгөөд хуруугаараа татаж тоглодог. Уянгалаг, нарийн аялгуу нь уртын дуу болон үлгэр домгийг дагалдахад тохиромжтой.',
                emoji: '🎼',
                features: ['13–21 чавхдас', 'Татлагат зэмсэг', 'Уянгалаг аялгуу', 'Хамтлагт ашигладаг'],
                videoId: '5nL1uTlhR1w'
            },
            {
                name: 'Товшуур',
                mongolian: 'Товшуур',
                desc: 'Баруун Монголын угсаатны бүлгүүдийн уламжлалт хоёр буюу гурван чавхдастай лют төрлийн хөгжмийн зэмсэг юм. Өвөрмөц дуутай бөгөөд ихэвчлэн баяр ёслолын үеэр тоглодог.',
                emoji: '🪕',
                features: ['2–3 чавхдас', 'Лют төрлийн зэмсэг', 'Хэмнэлтэй тоглолт', 'Ардын хөгжим'],
                videoId: 'WGl1DcC_kWQ'
            }
        ],
        ja: [
            {
                name: '馬頭琴',
                mongolian: 'Морин хуур',
                desc: '馬頭琴はモンゴルの国民楽器です。その独特な音は馬のいななきを模倣し、彫刻された馬の頭はモンゴル人と馬の深いつながりを表しています。',
                emoji: '🎻',
                features: ['2本の弦', '馬の毛の弓', '彫刻された馬の頭', '深く共鳴する音'],
                videoId: 'v4xZUr0BEfE'
            },
            {
                name: 'ホーミー',
                mongolian: 'Хөөмий',
                desc: '一人で複数の音程を同時に生み出す喉歌技法。様々なスタイル（ホーミー、シギト、カルギラー）が広大な景観を反響する幽玄な音を作り出します。',
                emoji: '🗣️',
                features: ['同時に複数の音程', '様々なスタイル', '古代の技法', 'ユネスコ遺産'],
                videoId: 'p_5yt5IX38I'
            },
            {
                name: 'ヤトガ',
                mongolian: 'Ятга',
                desc: '13〜21本の弦を持つ伝統的なツィター、弾いて演奏します。物語を語ったり、長歌を伴奏したりするのに最適な繊細で旋律的な音を生み出します。',
                emoji: '🎼',
                features: ['13〜21本の弦', '撥弦楽器', '旋律的な音', 'アンサンブルで使用'],
                videoId: '5nL1uTlhR1w'
            },
            {
                name: 'トブシュール',
                mongolian: 'Товшуур',
                desc: '西モンゴルの民族グループが伝統的に使用する2〜3弦のリュート。独特の響く音を持ち、お祝いの際によく演奏されます。',
                emoji: '🪕',
                features: ['2〜3本の弦', 'リュート族', 'リズミカルな演奏', '民俗楽器'],
                videoId: 'WGl1DcC_kWQ'
            }
        ]
    };

    const musicTypes = {
        en: [
            {
                title: 'Urtiin Duu',
                subtitle: 'Long Song',
                desc: 'Extended, ornamented vocal style with free rhythm, expressing the vastness of the steppes and philosophical themes of nature and nomadic life.',
                videoId: 'ANd1V2X8jWU'
            },
            {
                title: 'Bogino Duu',
                subtitle: 'Short Song',
                desc: 'Shorter folk songs with regular rhythm, often about daily life, love, horses, and celebrations. More common in social gatherings.',
                videoId: '6WlI24rv__g'
            },
            {
                title: 'Epic Tales',
                subtitle: 'Tuuli',
                desc: 'Lengthy narrative poems telling heroic stories, often performed with instrumental accompaniment. Can last for hours or even days.',
                videoId: 'vkOLlH0uC94'
            }
        ],
        mn: [
            {
                title: 'Уртын дуу',
                subtitle: 'Урт дуу',
                desc: 'Чөлөөт хэмнэлтэй, сунжруулан уянгалуулж дуулдаг хэв маяг бөгөөд тал нутгийн уудам орон зай, байгаль, нүүдлийн амьдралын гүн ухааныг илэрхийлдэг.',
                videoId: 'ANd1V2X8jWU'
            },
            {
                title: 'Богино дуу',
                subtitle: 'Богино дуу',
                desc: 'Тогтмол хэмнэлтэй богино ардын дуунууд бөгөөд өдөр тутмын амьдрал, хайр дурлал, адуу, баяр ёслолын тухай өгүүлдэг. Олон нийтийн цугларалтад түгээмэл дуулдаг.',
                videoId: '6WlI24rv__g'
            },
            {
                title: 'Тууль',
                subtitle: 'Баатарлаг тууль',
                desc: 'Баатарлаг түүхийг өгүүлдэг урт хэмжээний туульс бөгөөд ихэвчлэн хөгжмийн зэмсгийн дагалдлагатай хайлдаг. Зарим нь олон цаг, бүр хэдэн өдөр үргэлжилж болно.',
                videoId: 'vkOLlH0uC94'
            }
        ],
        ja: [
            {
                title: 'ウルティンドー',
                subtitle: '長歌',
                desc: '自由なリズムで拡張された装飾的なボーカルスタイル。草原の広大さと自然と遊牧生活の哲学的なテーマを表現します。',
                videoId: 'ANd1V2X8jWU'
            },
            {
                title: 'ボギノドー',
                subtitle: '短歌',
                desc: '規則的なリズムの短い民謡。日常生活、愛、馬、お祝いについてのことが多い。社交の場でより一般的です。',
                videoId: '6WlI24rv__g'
            },
            {
                title: '叙事詩',
                subtitle: 'トゥーリ',
                desc: '英雄的な物語を語る長い叙事詩。楽器の伴奏で演奏されることが多い。数時間または数日続くこともあります。',
                videoId: 'vkOLlH0uC94'
            }
        ]
    };

    const t = content[language];
    const inst = instruments[language];
    const types = musicTypes[language];

    return (
        <div className="min-h-screen px-6 pt-32 pb-16 section-enter">
            <div className="max-w-6xl mx-auto">
                <h2 className="heading-font text-5xl md:text-6xl font-black text-[var(--deep-blue)] mb-6">
                    {t.title}
                </h2>
                <div className="w-24 h-1 bg-[var(--sunset-orange)] mb-12"></div>

                <div className="mb-16">
                    <p className="text-xl text-[var(--earth-brown)] mb-8 leading-relaxed">
                        {t.intro}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {inst.map((instrument, idx) => (
                            <div
                                key={idx}
                                className="card-hover bg-white/80 p-6 rounded-2xl border-2 border-[var(--gold)]/40 shadow-lg cursor-pointer"
                                onClick={() => setSelectedInstrument(instrument)}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-6xl flex-shrink-0">{instrument.emoji}</div>
                                    <div className="flex-1">
                                        <h3 className="heading-font text-2xl font-bold text-[var(--deep-blue)] mb-1">
                                            {instrument.name}
                                        </h3>
                                        <p className="text-[var(--sunset-orange)] mb-3">{instrument.mongolian}</p>
                                        <p className="text-[var(--earth-brown)] leading-relaxed">
                                            {instrument.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {selectedInstrument && (
                        <div className="bg-gradient-to-br from-[var(--deep-blue)] to-[var(--earth-brown)] text-white p-8 rounded-2xl shadow-xl animate-fade-in-up">
                            <h3 className="heading-font text-3xl font-bold mb-4">
                                {selectedInstrument.name} {language === 'en' ? 'Features' : language === 'mn' ? 'Онцлог' : '特徴'}
                            </h3>

                            {selectedInstrument.videoId && (
                                <div className="mb-6">
                                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                        <iframe
                                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                                            src={`https://www.youtube.com/embed/${selectedInstrument.videoId}`}
                                            title={selectedInstrument.name}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <p className="text-center text-sm mt-2 opacity-80">
                                        {language === 'en' ? '🎵 Listen to authentic ' : language === 'mn' ? '🎵 Жинхэнэ ' : '🎵 本物の'}{selectedInstrument.name}{language === 'en' ? ' performance' : language === 'mn' ? ' тоглолт сонсох' : 'の演奏を聴く'}
                                    </p>
                                </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                {selectedInstrument.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-[var(--gold)] rounded-full"></div>
                                        <span className="text-lg">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 p-4 bg-white/10 rounded-lg">
                                <p className="text-sm">
                                    💡 <strong>{language === 'en' ? 'Note:' : language === 'mn' ? 'Тэмдэглэл:' : '注意:'}</strong> {language === 'en' ? 'Traditional Mongolian instruments are often made from natural materials sourced from the steppe - wood, horse hair, animal skin, and sinew - reflecting the nomadic people\'s deep connection to their environment.' : language === 'mn' ? 'Уламжлалт монгол хөгжмийн зэмсгүүд ихэвчлэн талын нутгаас олж авсан байгалийн материалаар - мод, адууны үс, амьтны арьс, шөрмөсөөр хийгддэг нь нүүдэлчдийн байгаль орчинтойгоо гүн холбоог илэрхийлдэг.' : '伝統的なモンゴル楽器は、草原から調達した自然素材 - 木材、馬の毛、動物の皮、腱 - で作られることが多く、遊牧民の環境との深いつながりを反映しています。'}
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mb-12">
                    <h3 className="heading-font text-3xl font-bold text-[var(--deep-blue)] mb-8">
                        {t.stylesTitle}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {types.map((type, idx) => (
                            <div
                                key={idx}
                                className="bg-white/80 p-6 rounded-xl border-2 border-[var(--gold)]/40 shadow-lg"
                                style={{ animationDelay: `${idx * 0.2}s` }}
                            >
                                <div className="text-4xl mb-4">🎵</div>
                                <h4 className="heading-font text-2xl font-bold text-[var(--deep-blue)] mb-2">
                                    {type.title}
                                </h4>
                                <p className="text-[var(--sunset-orange)] text-sm mb-3 italic">
                                    {type.subtitle}
                                </p>
                                <p className="text-[var(--earth-brown)] leading-relaxed mb-4">
                                    {type.desc}
                                </p>
                                {type.videoId && (
                                    <div className="mt-4">
                                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                            <iframe
                                                className="absolute top-0 left-0 w-full h-full rounded-lg"
                                                src={`https://www.youtube.com/embed/${type.videoId}`}
                                                title={type.title}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-r from-[var(--sky-blue)]/30 to-[var(--gold)]/30 p-8 rounded-2xl border-2 border-[var(--gold)]">
                    <h3 className="heading-font text-2xl font-bold text-[var(--deep-blue)] mb-4 text-center">
                        {t.unescoTitle}
                    </h3>
                    <p className="text-lg text-[var(--earth-brown)] text-center leading-relaxed">
                        {t.unescoDesc}
                    </p>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-[var(--earth-brown)] italic">
                        {t.note}
                    </p>
                </div>
            </div>
        </div>
    );
};

// Main App Component
const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeSection]);

    const renderSection = () => {
        switch(activeSection) {
            case 'nomadic':
                return <NomadicSection language={language} />;
            case 'language':
                return <LanguageSection language={language} />;
            case 'music':
                return <MusicSection language={language} />;
            case 'shagai':
                return <ShagaiSection language={language} />;
            default:
                return <HomeSection language={language} setActiveSection={setActiveSection} />;
        }
    };

    const footerText = {
        en: {
            main: '🏔️ Mongolian Culture Educational Resource 🏔️',
            sub: 'Preserving and sharing the rich heritage of Mongolia'
        },
        mn: {
            main: '🏔️ Монгол соёлын боловсролын эх сурвалж 🏔️',
            sub: 'Монголын баялаг өвийг хадгалж, хуваалцаж байна'
        },
        ja: {
            main: '🏔️ モンゴル文化教育リソース 🏔️',
            sub: 'モンゴルの豊かな遺産を保存し共有する'
        }
    };

    return (
        <div className="content-wrapper">
            <Navigation
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                language={language}
                setLanguage={setLanguage}
            />
            <main>
                {renderSection()}
            </main>
            <footer className="bg-gradient-to-r from-[var(--deep-blue)] to-[var(--earth-brown)] text-white py-8 text-center">
                <p className="text-lg">
                    {footerText[language].main}
                </p>
                <p className="text-sm mt-2 opacity-80">
                    {footerText[language].sub}
                </p>
            </footer>
        </div>
    );
};

// Render the app

ReactDOM.render(<App />, document.getElementById('root'));
