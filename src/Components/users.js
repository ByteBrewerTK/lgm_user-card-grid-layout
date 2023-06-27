import React from 'react'

const UsersCard = ({loading,users}) => {
    return loading ? (   
          <div id="main">
            <div className="loader">
                <span className='loadingAnimation'></span>
            </div>
          </div>
        ) : 
        (
          <div id="main">
    
          {users.map(user =>
                      <div className="project column-3">
                        {
                          console.log(user)
                        }
                        <div className="profile">
                          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <p className="email">{user.email}</p>
                          <p>User_ID: {user.id}</p>
                        </div>
                      </div>
            )
          }
          </div>
        )
}

export default UsersCard;