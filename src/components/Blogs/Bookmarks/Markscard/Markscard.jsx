import PropTypes from 'prop-types';

const Markscard = (props) => {
    const {bookmark} = props;
    return (
        <div className="bg-[#FFFFFF] p-3 rounded-lg mb-3">
            <h3 className="text-[1rem] font-semibold">{bookmark.title}</h3>
        </div>
    );
};

Markscard.propTypes = {
    bookmark : PropTypes.object.isRequired,
}

export default Markscard;