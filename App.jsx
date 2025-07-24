import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Phone, Mail, MapPin, Star, Award, Users, History, ShoppingBag, Image } from 'lucide-react'
import './App.css'

// Импорт изображений
import kitchenSinks from './assets/20250724_0309_ЭстетикаКухонныхМоек_simple_compose_01k0ww439cft488k78ztjndd5y.png'
import bathProtection from './assets/20250724_0306_Защитадляванной_simple_compose_01k0wvxp2jetdbyg2954f5ws5v.png'
import toiletSelection from './assets/20250724_0303_ВыборУнитазовАкваДом_simple_compose_01k0wvsc3xf01s71sd4j7s1w80.png'
import sensorTap from './assets/20250724_0300_СенсорнаяКухоннаяРоскошь_simple_compose_01k0wvkddqexjtxd3mhwcwyean.png'
import showerCabin from './assets/20250724_0257_Минималистичнаядушеваякабина_simple_compose_01k0wvd7szf3jrapn13aw1pktv.png'
import modernBathroom from './assets/20250724_0252_Современнаяваннаякомната_simple_compose_01k0wv4krbe0rv8d77dadjqnw2.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const galleryImages = [
    { src: kitchenSinks, title: 'Эстетика кухонных моек', description: 'Справочник подбора кухонных моек' },
    { src: bathProtection, title: 'Защита для ванной', description: 'Предупреждение протечек, долговечность, влагозащита' },
    { src: toiletSelection, title: 'Выбор унитазов АкваДом', description: 'Как выбрать туалет: размер, форма, тип установки' },
    { src: sensorTap, title: 'Сенсорная кухонная роскошь', description: 'Инновационность, гигиена, экономия воды' },
    { src: showerCabin, title: 'Минималистичная душевая кабина', description: 'Гигиеничные душевые кабины' },
    { src: modernBathroom, title: 'Современная ванная комната', description: 'Обновите вашу ванную комнату уже сегодня!' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'gallery', 'about', 'history', 'team', 'assortment', 'awards', 'contacts']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Навигация */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">А</span>
              </div>
              <span className="text-xl font-bold text-gray-800">АкваДом</span>
            </motion.div>

            {/* Десктопное меню */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'gallery', label: 'Галерея' },
                { id: 'about', label: 'О нас' },
                { id: 'history', label: 'История' },
                { id: 'team', label: 'Команда' },
                { id: 'assortment', label: 'Ассортимент' },
                { id: 'awards', label: 'Награды' },
                { id: 'contacts', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Мобильное меню */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Мобильное выпадающее меню */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white border-t"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'gallery', label: 'Галерея' },
                { id: 'about', label: 'О нас' },
                { id: 'history', label: 'История' },
                { id: 'team', label: 'Команда' },
                { id: 'assortment', label: 'Ассортимент' },
                { id: 'awards', label: 'Награды' },
                { id: 'contacts', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Главная секция */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Добро пожаловать в <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">АкваДом</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Уютный семейный магазин сантехнических изделий премиум-класса в центре Москвы
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button 
                onClick={() => scrollToSection('gallery')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Посмотреть галерею
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Связаться с нами
              </button>
            </motion.div>

            <motion.div 
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center p-6 bg-white/50 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Премиум качество</h3>
                <p className="text-gray-600">Только проверенные бренды и надежные поставщики</p>
              </div>

              <div className="text-center p-6 bg-white/50 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Семейный бизнес</h3>
                <p className="text-gray-600">Три поколения опыта и заботы о каждом клиенте</p>
              </div>

              <div className="text-center p-6 bg-white/50 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Награды и признание</h3>
                <p className="text-gray-600">Лауреат премий и победитель отраслевых конкурсов</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Галерея */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Галерея наших решений
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Познакомьтесь с нашими лучшими предложениями для создания идеального пространства
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* О нас */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                О магазине АкваДом
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                «АкваДом» — это уютный семейный магазин сантехнических изделий, созданный в духе традиций комфорта и заботы о каждом клиенте. Расположенный в живописном районе центра Москвы, наш магазин предлагает своим посетителям исключительно качественную продукцию для комфортного оснащения ванн, кухонь и санузлов.
              </p>
              <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-blue-800 font-medium italic">
                  "Хорошее качество начинается там, где заканчивается компромисс"
                </p>
                <p className="text-blue-600 text-sm mt-2">— Наш девиз</p>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Качество</h3>
                <p className="text-gray-600 text-sm">Только проверенные бренды</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Сервис</h3>
                <p className="text-gray-600 text-sm">Индивидуальный подход</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Опыт</h3>
                <p className="text-gray-600 text-sm">Почти 30 лет работы</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Локация</h3>
                <p className="text-gray-600 text-sm">Центр Москвы</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* История */}
      <section id="history" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Наша история
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Три поколения семьи Кузнецовых создавали и развивали наш семейный бизнес
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
            
            <div className="space-y-12">
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex-1 text-right pr-8">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">1990-е годы</h3>
                    <p className="text-gray-600">
                      Основатель магазина, Пётр Иванович Кузнецов, будучи опытным специалистом-сантехником, организовал небольшую лавку с минимальным ассортиментом рядом с домом.
                    </p>
                  </div>
                </div>
                <div className="relative z-10 w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="flex-1 pl-8"></div>
              </motion.div>

              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex-1 pr-8"></div>
                <div className="relative z-10 w-8 h-8 bg-cyan-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="flex-1 text-left pl-8">
                  <div className="bg-cyan-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">2000-е годы</h3>
                    <p className="text-gray-600">
                      Благодаря честному отношению к делу и качественному подбору продуктов, клиенты стали доверять магазину всё больше. Бизнес начал активно развиваться.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex-1 text-right pr-8">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Сегодня</h3>
                    <p className="text-gray-600">
                      «АкваДом» гордится своей репутацией надежного поставщика сантехнического оборудования и аксессуаров высочайшего класса. Теперь это процветающее предприятие трех поколений семьи Кузнецовых.
                    </p>
                  </div>
                </div>
                <div className="relative z-10 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="flex-1 pl-8"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Команда */}
      <section id="team" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Профессионалы, которые знают свою работу и любят помогать клиентам
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Профессиональная команда экспертов
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Наши специалисты:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Подробно рассказывают об особенностях товаров
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Советуют лучшие решения для ваших нужд
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Учитывают условия эксплуатации
                    </li>
                  </ul>
                </div>
                
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Наши принципы:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                      Индивидуальный подход к каждому покупателю
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                      Ценим ваше доверие
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                      Гарантируем качественное обслуживание
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ассортимент */}
      <section id="assortment" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Наш ассортимент
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр сантехнических изделий премиум-класса для вашего дома
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🚿', title: 'Душевые кабины', description: 'Современные душевые кабины и душевое оборудование' },
              { icon: '🛁', title: 'Ванны и джакузи', description: 'Ванны из акрила, чугуна и стали' },
              { icon: '🚰', title: 'Смесители и краны', description: 'Разнообразные смесители ведущих брендов' },
              { icon: '🚽', title: 'Унитазы', description: 'Подвесные и напольные унитазы премиум-класса' },
              { icon: '🪣', title: 'Умывальники', description: 'Умывальники и раковины любых форм и стилей' },
              { icon: '🔧', title: 'Аксессуары', description: 'Полотенцесушители и сопутствующие аксессуары' },
              { icon: '💧', title: 'Гигиеническое оборудование', description: 'Современное гигиеническое оборудование (биде)' },
              { icon: '⚡', title: 'Электрооборудование', description: 'Приборы для экономии воды и электрооборудование' },
              { icon: '🔩', title: 'Запчасти', description: 'Все необходимые запасные части и расходные материалы' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Дополнительные услуги</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <ShoppingBag className="w-8 h-8 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Доставка</h4>
                <p className="text-blue-100">Доставка покупок удобным способом домой или на объект</p>
              </div>
              <div>
                <Users className="w-8 h-8 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Монтаж</h4>
                <p className="text-blue-100">Профессиональный монтаж нашими специалистами</p>
              </div>
              <div>
                <Phone className="w-8 h-8 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Консультации</h4>
                <p className="text-blue-100">Помощь в выборе оптимального решения для любого бюджета</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Награды */}
      <section id="awards" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Наши награды и достижения
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Признание профессионалов отрасли и доверие тысяч довольных клиентов
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                year: '2015',
                title: 'Лучший продавец санитарии столицы',
                description: 'Победитель конкурса среди специализированных магазинов Москвы',
                icon: '🏆'
              },
              {
                year: '2018',
                title: 'Региональный бренд качества',
                description: 'Лауреат престижной премии за высокое качество товаров и услуг',
                icon: '🥇'
              },
              {
                year: '2019-2023',
                title: 'Участие в выставках',
                description: 'Регулярное участие в «МосСтройЭкспо», «ИнтерСанТех»',
                icon: '🏢'
              },
              {
                year: 'Постоянно',
                title: 'Благодарности клиентов',
                description: 'Регулярные благодарности от постоянных клиентов и партнёров',
                icon: '⭐'
              }
            ].map((award, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{award.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {award.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{award.title}</h3>
                    <p className="text-gray-600">{award.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg inline-block">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <p className="text-lg text-gray-700 italic">
                "Нам приятно получать такие высокие оценки, ведь они подтверждают правильность выбранного пути."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Приглашаем посетить наш магазин! Сделаем ваш дом лучше вместе
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Телефон</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                  <p className="text-gray-600">info@akvadom.ru</p>
                  <p className="text-gray-600">www.akvadom.ru</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Адрес</h3>
                  <p className="text-gray-600">ул. Водопроводная, дом 7, Москва</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Режим работы</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>ПН-ПТ:</span>
                    <span>8:00–20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>СБ:</span>
                    <span>9:00–18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ВС:</span>
                    <span>выходной</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Напишите нам</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                  <textarea 
                    rows="4" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ваше сообщение..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Отправить сообщение
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">А</span>
              </div>
              <span className="text-xl font-bold">АкваДом</span>
            </div>
            <p className="text-gray-400 mb-4">
              Магазин сантехники премиум-класса в центре Москвы
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 АкваДом. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

