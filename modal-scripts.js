function setupModal(btnId, modalId, closeId) {
    var btn = document.getElementById(btnId);
    var modal = document.getElementById(modalId);
    var close = document.getElementById(closeId);

    btn.onclick = function() {
        modal.style.display = "block";
    }

    close.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Initialize each modal with the appropriate IDs
setupModal('btnInitialConsultations', 'modalInitialConsultations', 'closeInitialConsultations');
setupModal('btnPrivateSessions', 'modalPrivateSessions', 'closePrivateSessions');
setupModal('btnCheckUps', 'modalCheckUps', 'closeCheckUps');
setupModal('btnTrainingWalks', 'modalTrainingWalks', 'closeTrainingWalks');
setupModal('btnVirtualTraining', 'modalVirtualTraining', 'closeVirtualTraining');
setupModal('btnPrivateTrainingPackages', 'modalPrivateTrainingPackages', 'closePrivateTrainingPackages');
setupModal('btnTrainingWalkPackages', 'modalTrainingWalkPackages', 'closeTrainingWalkPackages');
setupModal('btnAdolescentI', 'modalAdolescentI', 'closeAdolescentI');
setupModal('btnAdolescentII', 'modalAdolescentII', 'closeAdolescentII');
setupModal('btnLeashSkills', 'modalLeashSkills', 'closeLeashSkills');
