{/* SKILLS */}
<div className="md:flex md:justify-between mt-16 gap-32">
{/* Language  */}
<motion.div
  className="md:w-1/4 mt-10"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.5 }}
  variants={{
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }}
>
  <div className="relative h-32">
    <div className="z-10">
      <p className="font-playfair font-semibold text-5xl">01</p>
      <p className="font-playfair font-semibold text-3xl mt-3">
        Languages
      </p>
    </div>
    <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
  </div>
  <p className="mt-5">
    <span className={styles.neon}>HTML</span>
    <span className={styles.neon}>CSS</span>
    <span className={styles.neon}>JavaScript</span>
    <span className={styles.neon}>React</span>
    <span className={styles.neon}>TypeScript</span>
    <span className={styles.neon}>Tailwind</span>
  </p>
  
</motion.div>

{/* Library & Frameworks */}
<motion.div
  className="md:w-1/4 mt-10"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ delay: 0.2, duration: 0.5 }}
  variants={{
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }}
>
  <div className="relative h-32">
    <div className="z-10">
      <p className="font-playfair font-semibold text-5xl">02</p>
      <p className="font-playfair font-semibold text-3xl mt-3">
        BackEnd
      </p>
    </div>
    <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
  </div>
  <p className="mt-5">
  <span className={styles.neon}>Node,js</span>
  <span className={styles.neon}>Next Auth</span>
  <span className={styles.neon}>Express Js</span>
  </p>
</motion.div>
{/* DataBAse */}
<motion.div
  className="md:w-1/4 mt-10"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ delay: 0.4, duration: 0.5 }}
  variants={{
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }}
>
  <div className="relative h-32">
    <div className="z-10">
      <p className="font-playfair font-semibold text-5xl">03</p>
      <p className="font-playfair font-semibold text-3xl mt-3">
        DataBase
      </p>
    </div>
    <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
  </div>
  <p className="mt-5">
  <span className={styles.neon}>MySql</span>
  <span className={styles.neon}>MongoDB</span>
  <span className={styles.neon}>Firebase</span>
  </p>
</motion.div>

{/* Devops */}
<motion.div
  className="md:w-1/4 mt-10"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ delay: 0.4, duration: 0.5 }}
  variants={{
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }}
>
  <div className="relative h-32">
    <div className="z-10">
      <p className="font-playfair font-semibold text-5xl">04</p>
      <p className="font-playfair font-semibold text-3xl mt-3">
        Devops
      </p>
    </div>
    <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
  </div>
  <p className="mt-5">
  <span className={styles.neon}>GithuB</span>
  <span className={styles.neon}>Git</span>
  <span className={styles.neon}>AWS</span>
  </p>
</motion.div>
</div>