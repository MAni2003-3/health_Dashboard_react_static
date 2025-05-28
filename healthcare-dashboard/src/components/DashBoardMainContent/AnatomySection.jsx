import humanAnatomy from '../../assets/images/HumanAnatomy1.jpg';
import toothIcon from '../../assets/images/tooth.avif';
import lungIcon from '../../assets/images/lungs.avif';
import boneIcon from '../../assets/images/bone.avif';

import '../../styles/AnatomySection.css';

const AnatomySection = () => (
  <section className="anatomy-section">
    <img src={humanAnatomy} alt="Human Anatomy" className="anatomy-image" />

    <div className="icon-stack">
      <div className="icon-label tooth">
        <img src={toothIcon} alt="Teeth" />
        <span>Teeth</span>
      </div>
      <div className="icon-label lungs">
        <img src={lungIcon} alt="Lungs" />
        <span>Lungs</span>
      </div>
      <div className="icon-label bone">
        <img src={boneIcon} alt="Bone" />
        <span>Bone</span>
      </div>
    </div>
  </section>
);

export default AnatomySection;




