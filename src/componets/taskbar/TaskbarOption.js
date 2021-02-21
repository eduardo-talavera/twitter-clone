import './TaskbarOption.css';

function TaskbarOption({ active, Icon }) {
  return (
    <div className={`taskbarOption ${active && 'taskbarOption--active'}`}>
      <Icon />
    </div>
  )
}

export default TaskbarOption
