const HandleClickTer = ({ index, selected, handleClick, gameOver }) => {
  const handleClickInternal = () => {
    if (!gameOver) {
      handleClick(index)
    }
  }

  return (
    <div
      className={`grid-item-ter ${
        selected[index] ? 'Selected' : 'NonSelected'
      }`}
      onClick={handleClickInternal}
    >
      {selected[index] === 'user' && (
        <img
          src='/assets/Circle-ter.png'
          alt='circle'
          className='img-circle-ter'
        />
      )}
      {selected[index] === 'vs' && (
        <img
          src='/assets/Square-ter.png'
          alt='square'
          className='img-square-ter'
        />
      )}
    </div>
  )
}

export default HandleClickTer
