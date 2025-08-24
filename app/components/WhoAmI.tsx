import InfoCard from "./InfoCard"

const WhoAmI = ({ active }: { active: boolean }) => {
  return (
    <div className="info-grid" hidden={!active}>
      
      <InfoCard title="My Story" tailwind="sm:col-span-8">
        <p className="font-almendra">
          My fascination with technology and computers started early, driven by a keen interest in understanding how everything works, right down to the smallest details. When I discovered programming, it was an immediate click. That pivotal moment in 2019 marked the start of my coding journey. Despite the initial ebb and flow of learning, I rapidly developed the skills to build full websites from the ground up, with a strong focus on design, logic, and security. This comprehensive approach has allowed me to seamlessly navigate and master both current backend and frontend frameworks.
        </p>
      </InfoCard>

      <InfoCard title="Hobbies">
        <div className="badge-container">
          <div className="special-badge">Chess</div>
          <div className="special-badge">Math</div>
          <div className="special-badge">Electronics</div>
          <div className="special-badge">Sport & Health Care</div>
          <div className="special-badge">Design</div>
          <div className="special-badge">Swim</div>
          <div className="special-badge">Learning</div>
          <div className="special-badge">Travel</div>
          <div className="special-badge">Books</div>
        </div>
      </InfoCard>


      <InfoCard title="Soft Skills">
        <div className="badge-container">
          <div className="special-badge">Self Learning</div>
          <div className="special-badge">Organizing</div>
          <div className="special-badge">Problem Solving</div>
          <div className="special-badge">Project Design</div>
          <div className="special-badge">Hard Working</div>
          <div className="special-badge">Time Management</div>
          <div className="special-badge">Self Motivation</div>
          <div className="special-badge">Creativity</div>
        </div>
      </InfoCard>

      <InfoCard title="Personality" tailwind="sm:col-span-8">
        <p className="font-almendra">
          Beyond the screen, my mind is constantly engaged, whether I'm strategizing over a chess game or diving into a new topic through reading, always driven by a love for learning new things. Away from work, the intellectual high of winning a chess game and the invigorating feeling of a good workout or a refreshing swim, and the warmth of positive interactions with people. My friends know me as someone who is respectful, kind, and a good guy, guided by the principles of Islam. I find peace and happiness in simple moments, like watching the graceful flight of birds around my house.
        </p>
      </InfoCard>

    </div>
  )
}

export default WhoAmI
