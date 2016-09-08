import {Injectable} from "@angular/core";

@Injectable()
export class TranslationService {

    public getText(key:string):string {
        if (this.getTranslations()[key] == null) {
            console.log("translation for " + key);
            return "{" + key + "}";
        }
        return this.getTranslations()[key];
    }

    protected getTranslations() {
        // TODO move to separate json file, split into path and app-texts
        return {
            "Translation": "Übersetzung",
            "QuickScan": "QuickScan",
            "NewQuickScan": "Neuer QuickScan",
            "NewDeepScan": "Neuer DeepScan",
            "DeepScan": "DeepScan",
            "Companies": "Firmen",
            "Persons": "Personen",
            "Reports": "Berichte",
            "Admin": "Admin",
            "Back": "Zurück",
            "MainMenu" : "Hauptmenü",
            "Search" : "Suche",
            "SearchInputLabel" : "Suchbegriff", // enter search text
            "Project": "Projekt",
            "Case": "Fall",
            "StartDate": "Startdatum",
            "EndDate": "Enddatum",
            "Customer": "Kunde",
            "CustomerPL": "Kunde PL",
            "ServiceProvider": "Service Provider",
            "ServiceProviderPL": "Service Provider PL",
            "IndustrySegment": "Industriebereich",
            "Benchmarking": "Benchmarking",
            "Monitoring": "Monitoring",
            "Comments": "Kommentare",
            "Delete": "Löschen",
            "Cancel": "Abbrechen",
            "Ok": "OK",
            "EditDeepScan": "DeepScan bearbeiten",
            "EditQuickScan": "QuickScan bearbeiten",
            "EditInterviewee": "Teilnehmer bearbeiten",
            "AddInterviewee": "Teilnehmer hinzufügen",
            "Interviewees": "Teilnehmer",
            "Person": "Person",
            "Progress": "Fortschritt",
            "Question": "Frage",
            "Questions": "Fragen",
            "Actual": "Ist-Wert",
            "Target": "Soll-Wert",
            "NewCompany": "Neue Firma",
            "EditCompany": "Firma bearbeiten",
            "NewPerson": "Neue Person",
            "EditPerson": "Person bearbeiten",
            "CompanyName": "Firmenname",
            "Company": "Firma",
            "Street": "Strasse",
            "PostalCode": "PLZ",
            "Country": "Land",
            "City": "Ort",
            "Salutation": "Anrede",
            "FamilyName": "Nachname",
            "FirstName": "Vorname",
            "EmploymentTitle": "Stellenbeschrieb",
            "EMail": "E-Mail",
            "Phone": "Telefon",
            "CreationDate": "Erstellungsdatum",
            "ClosingDate": "Stilllegungsdatum",
            "DeleteWarningQuestion": "Wollen Sie diesen Datensatz wirklich löschen?", // Do you really want to delete this item?
            "Answer": "Antwort",
            "Previous": "Zurück",
            "SkipAndNext": "Überspringen ohne Speichern",
            "SaveAndNext": "Speichern und Weiter",
            "SupportProcesses": "Support-Prozesse",
            "InputParameter": "Eingabe-Parameter",
            "InputParameters": "Eingabe-Parameter",
            "NewInputParameter": "Neuer Eingabe-Parameter",
            "Users": "Benutzer",
            "NewUser": "Neuer Benutzer",
            "Configuration": "Konfiguration",
            "MaturityLevelSchemas": "Reifegrad-Schemas",
            "MaturityLevelSchema": "Reifegrad-Schema",
            "Cases": "Fälle",
            "NewCase": "Neuer Fall",
            "EditCase": "Fall bearbeiten",
            "CaseName": "Fallname",
            "Category": "Kategorien",
            "Categories": "Kategorien",
            "NewCategory": "Neue Kategorie",
            "EditCategory": "Kategorie bearbeiten",
            "CategoryName": "Kategorie Name",
            "Capability": "Fähigkeit",
            "NewCapability" : "Neue Fähigkeit",
            "CategorySelection": "Kategorie-Auswahl",
            "KPI": "KPI",
            "KPICategories": "KPI-Kategorien",
            "Units": "Einheiten",
        };
    }

}