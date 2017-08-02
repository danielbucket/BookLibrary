const xIcon = '../../assets/styleAssets/wrong-sign.svg'

export const modalStyle = {
  loginBox: {
    "padding": "3px"
  },

  modalContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '9999',
    background: '#fff',
    height: '300px',
    width: '500px'
  },

  backdropStyle: {
     position: 'absolute',
     width: '100%',
     height: '100%',
     top: '0px',
     left: '0px',
     zIndex: '9997',
     background: 'rgba(0, 0, 0, 0.5)'
   },

  top: {
    "width": "100%",
    "display": "flex",
    "flexDirection": "row"
  },

  buttonBox: {
    "width": "50%",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "spaceBetween"
  },

  closeModalBtnBox: {
    "width": "50%",
  },

  closeModalBtn: {
    "margin": "0",
    "backgroundImage": `url('${xIcon}')`,
    "height": "20px",
    "width": "20px",
    "border": "none",
    "position": "absolute",
    "top": "5px",
    "right": "5px"
  },

   modalInput: {
    "width": "200px",
    "height": "40px",
    "margin": "15px auto 0",
  },

  loginButton: {
    "width": "200px",
    "height": "40px",
    "margin": "15px auto 0",
    "border": "none",
    "fontSize": "20px"
  }

}
