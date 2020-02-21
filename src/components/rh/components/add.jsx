import React from 'react';

const Add = () => {
    return (
        <div className="register-right">
            <h3 className="register-heading">Ajouter un nouveau candidat</h3>
            <div className="register-form">
                <div className="col-md-12">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Nom *" value="" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Prenom *" value="" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email *" value="" />
                    </div>
                    <div className="form-group">
                        <select className="form-control">
                            <option className="hidden" selected disabled>Langage</option>
                            <option>React</option>
                            <option>HTML</option>
                            <option>CSS</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <select className="form-control">
                            <option className="hidden" selected disabled>Niveau</option>
                            <option>Junior</option>
                            <option>Intermediaire</option>
                            <option>Senior</option>
                        </select>
                    </div>
                    <input type="submit" className="btnRegister" value="Ajouter" />
                </div>
            </div>
        </div>
    )
}

export default Add;