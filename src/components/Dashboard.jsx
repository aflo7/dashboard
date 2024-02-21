import {
  AiFillHome,
  AiFillProfile,
  AiOutlineHistory,
  AiOutlineClose
} from 'react-icons/ai';
import { TbMessages } from 'react-icons/tb';
import { FaTasks } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import {
  MdDashboard,
  MdContactSupport,
  MdOutlinePrivacyTip
} from 'react-icons/md';
import { CiSettings } from 'react-icons/ci';

function Dashboard({closeTheDashboard}) {
  return (
    <div className="dashboard">
      <div>
        <div className="top-dashboard-btn">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <MdDashboard />
            <div
              style={{ paddingLeft: '10px' }}
              className="top-dashboard-btn-text"
            >
              Dashboard
            </div>
          </div>
          <div className="close-wrapper" onClick={closeTheDashboard}>
            <AiOutlineClose />
          </div>
        </div>
        <div className="dashboard-btn">
          <AiFillHome />
          <div style={{ paddingLeft: '10px' }}>Home</div>
        </div>
        <div className="dashboard-btn">
          <AiFillProfile />
          <div style={{ paddingLeft: '10px' }}>Profile</div>
        </div>
        <div className="dashboard-btn">
          <TbMessages />
          <div style={{ paddingLeft: '10px' }}>Messages</div>
        </div>
        <div className="dashboard-btn">
          <AiOutlineHistory />
          <div style={{ paddingLeft: '10px' }}>History</div>
        </div>
        <div className="dashboard-btn">
          <FaTasks />
          <div style={{ paddingLeft: '10px' }}>Tasks</div>
        </div>
        <div className="dashboard-btn">
          <BsFillPeopleFill />
          <div style={{ paddingLeft: '10px' }}>Communities</div>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <div className="dashboard-btn">
          <CiSettings />
          <div style={{ paddingLeft: '10px' }}>Settings</div>
        </div>

        <div className="dashboard-btn">
          <MdContactSupport />
          <div style={{ paddingLeft: '10px' }}>Support</div>
        </div>
        <div className="dashboard-btn">
          <MdOutlinePrivacyTip />
          <div style={{ paddingLeft: '10px' }}>Privacy</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
