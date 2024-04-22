import PropTypes from 'prop-types';

const SectionTitle = ({subTitle, title}) => {
    return (
        <div className="text-center">
            <span className="text-xl text=[#1B1A1A]">{subTitle}</span>
            <h2 className="font-rancho text-[#331A15] text-5xl pt-2">{title}</h2>
        </div>
    );
};

SectionTitle.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
}

export default SectionTitle;