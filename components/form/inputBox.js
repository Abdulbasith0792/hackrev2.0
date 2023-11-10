import TeamDetails from "./teamdetails";

const InputBox = () => {
  return (
    <div className="flex">
      <div className="w-full h-full flex flex-row bg-black">
        <input placeholder="Team Name" />
        <input placeholder="Project Name"/>
        <input placeholder="College Name"/>
        <input placeholder="Team Lead Name"/>
        <input placeholder="Mobile"/>
        <input placeholder="Email"/>

      </div>

      <div className="flex flex-col">
            <h1>Enter Team Member Details</h1>
            <TeamDetails no={1} />
            <TeamDetails no={2}/>
            <TeamDetails no={3}/>
            <TeamDetails no={4}/>
            <TeamDetails no={5}/>
            <TeamDetails no={6}/>
      </div>
    </div>
  );
}

export default InputBox