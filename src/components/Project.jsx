
import { AiOutlineEye, AiOutlineFork } from 'react-icons/ai';
import {
  MdOutlineFavoriteBorder
} from 'react-icons/md';

function Project({ projectTitle, projectDescription }) {
  return (
    <div className="item">
      <div className="item-title">{projectTitle}</div>
      <div className="item-desc">{projectDescription}</div>

      <div className="options-wrapper">
        <AiOutlineFork
          style={{
            fontSize: '20pt',
            paddingLeft: '10px'
          }}
        />
        <AiOutlineEye
          style={{
            fontSize: '20pt',
            paddingLeft: '10px'
          }}
        />
        <MdOutlineFavoriteBorder
          style={{
            fontSize: '20pt',
            paddingLeft: '10px'
          }}
        />
      </div>
    </div>
  );
}

export default Project;
