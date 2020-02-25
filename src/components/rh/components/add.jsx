import React from 'react';

const Add = () => {
    return (
        <div className="register-right">
            <h3 className="register-heading">Ajouter un nouveau candidat</h3>
            <div className="register-form">
                <div className="col-md-15">
                    <div className="form-group">
                        <input type="text" placeholder="Nom *" value="" />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Prenom *" value="" />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email *" value="" />
                    </div>
                    <div className="form-group">
                        <select >
                            <option className="hidden" selected disabled>Langage</option>
                            <option>React</option>
                            <option>HTML</option>
                            <option>CSS</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <select >
                            <option className="hidden" selected disabled>Niveau</option>
                            <option>Junior</option>
                            <option>Intermediaire</option>
                            <option>Senior</option>
                        </select>
                    </div>
                    <div className="btnRegister" >
                        <span><img alt="add" /></span>
                        <span>Ajouter le candidat</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add;