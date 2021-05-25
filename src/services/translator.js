const translations = {
    update: 'Modification',
    new: 'Nouveau',
    users: 'Utilisateurs',
    user: 'Utilisateur'
}
  
export const t = (word) => {
    return translations[word] ?? word;
}