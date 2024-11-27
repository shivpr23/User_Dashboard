export const ROLES = {
    ADMIN: 'ADMIN',
    USER: 'USER',
  };
  
  export const mockUsers = [
    { id: 1, email: 'admin@vrv.com', password: 'admin123', role: ROLES.ADMIN },
    { id: 2, email: 'user@vrv.com', password: 'user123', role: ROLES.USER },
    { id: 3, email: 'usera@vrv.com', password: 'usera123', role: ROLES.USER },
    { id: 4, email: 'user2@vrv.com', password: 'userb123', role: ROLES.USER },
    { id: 5, email: 'user3@vrv.com', password: 'userc123', role: ROLES.ADMIN },
    { id: 6, email: 'user4@vrv.com', password: 'userd123', role: ROLES.USER },
  ];
  