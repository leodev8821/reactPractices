import { FirstCheckLabel, SecondCheckLabel } from '../labels/Labels';

export function CheckSelectInput() {
    return (
      <div>
        <input type="checkbox" value="check1"/>
        <FirstCheckLabel /><br/>
        <input type="checkbox" value="check2"/>
        <SecondCheckLabel /><br/>
      </div>
    );
}

export function GenderRadioSelect() {
    return (
        <div id="sexRadio">
            <input type="radio" id='Hombre' name='gender' value="Hombre"/>
            <label for="Hombre">Hombre</label>
            <input type="radio" id='Mujer' name='gender' value="Mujer"/>
            <label for="Mujer">Mujer</label>
        </div>
    );
}

export function CityListSelect() {
    return (
        <select>
            <option value="Alicante">Alicante</option>
            <option value="Madrid">Madrid</option>
            <option value="Valladolid">Valadolid</option>
        </select>
    );
}

