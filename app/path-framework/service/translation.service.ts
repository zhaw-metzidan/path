import {Injectable} from "@angular/core";

@Injectable()
export class TranslationService {

    public getText(key: string, ...parameters: string[]): string {
        if (this.getTranslations()[key] == null) {
            return "{" + key + "}";
        }
        let result: string = this.getTranslations()[key];
        let k: number = 0;
        for (let parameter of parameters) {
            result = result.replace("{" + k + "}", parameter);
            k++;
        }
        return result;
    }

    protected getTranslations() {
        // TODO move to separate json file, split into path and app-texts
        let languageCode: string = localStorage.getItem("languageCode");

        if (languageCode == "de") {
            return {
                "Actual": "Ist-Wert",
                "AddInputParameter": "Eingabe-Parameter hinzufügen",
                "AddInterviewee": "Teilnehmer hinzufügen",
                "AddSubprocess": "Teilprozess hinzufügen",
                "AddSupportProcess": "Support-Prozess hinzufügen",
                "AddPermissionRole": "Rolle hinzufügen",
                "AddProject": "Projekt hinzufügen",
                "Admin": "Admin",
                "Answer": "Antwort",
                "AssessmentReport": "Assessment-Bericht",
                "AssessmentDetailReport": "Assessment-Bericht Details",
                "Back": "Zurück",
                "BackendFormatError": "Unbekanntes Datenformat: {0}",
                "Background": "Hintergrund",
                "Benchmarking": "Benchmarking",
                "BenchmarkingAndSimulation": "Benchmark & Simulation",
                "BenchmarkingInputParameterRange": "Benchmarking Eingabe-Parameter Bereich",
                "BenchmarkingRangeOrderError": "Die Reihenfolge der Von- und Bis-Werte ist falsch",
                "BenchmarkingRangeOverlappingError": "Die Wertebereiche dürfen sich nicht überlappen",
                "Cancel": "Abbrechen",
                "Capability": "Fähigkeit",
                "Case": "Fall",
                "CaseName": "Fallname",
                "Cases": "Fälle",
                "Categories": "Kategorien",
                "Category": "Kategorien",
                "CategoryName": "Kategorie Name",
                "CategorySelection": "Kategorie-Auswahl",
                "City": "Ort",
                "ClosingDate": "Stilllegungsdatum",
                "Comments": "Kommentare",
                "Companies": "Firmen",
                "Company": "Firma",
                "CompanyName": "Firmenname",
                "CompletenessCheck": "Vollständigkeits-Prüfung",
                "Configuration": "Konfiguration",
                "Country": "Land",
                "Countries": "Länder",
                "CountryName": "Land Name",
                "CreationDate": "Erstellungsdatum",
                "Customer": "Kunde",
                "CustomerPL": "Kunde PL",
                "DataReferencedError": "Datensatz wird referenziert und kann nicht gelöscht werden.",
                "DateOrderError": "Die Datums-Reihenfolge ist nicht korrekt. Bitte überprüfen Sie die Daten.",
                "DeepScan": "DeepScan",
                "DeepScanProjectLegalForm": "Rechtsform",
                "DeepScanProjectLegalForms": "Rechtsformen",
                "DeepScanProjectType": "Typ",
                "DeepScanProjectTypes": "Typen",
                "Definition": "Definition",
                "Delete": "Löschen",
                "DeleteWarningQuestion": "Wollen Sie diesen Datensatz wirklich löschen?", // Do you really want to delete this item?
                "Detail": "Detail",
                "DuplicateDataError": "Dieser Datensatz existiert bereits und kann nicht erstellt werden.",
                "EMail": "E-Mail",
                "EditCase": "Fall bearbeiten",
                "EditCategory": "Kategorie bearbeiten",
                "EditCompany": "Firma bearbeiten",
                "EditDeepScan": "DeepScan bearbeiten",
                "EditInterviewee": "Teilnehmer bearbeiten",
                "EditInputParameter": "Input Parameter bearbeiten",
                "EditKPI": "KPI bearbeiten",
                "EditMaturityLevelSchema": "Reifegrad-Schema bearbeiten",
                "EditMasterDataObject": "Stammdaten-Objekt bearbeiten",
                "EditOrganisationUnit": "Organisationseinheit bearbeiten",
                "EditPerson": "Person bearbeiten",
                "EditPermissionRole": "Rolle bearbeiten",
                "EditQuickScan": "QuickScan bearbeiten",
                "EditSimulation": "Simulation bearbeiten",
                "EditSubprocess": "Teilprozess bearbeiten",
                "EditSupportProcess": "Support-Prozess bearbeiten",
                "EditTransactionalDataObject": "Bewegungsdaten-Objekt bearbeiten",
                "EditUser": "Benutzer bearbeiten",
                "EmploymentTitle": "Stellenbeschrieb",
                "EndDate": "Enddatum",
                "FamilyName": "Nachname",
                "FirstName": "Vorname",
                "Formula": "Formel",
                "From": "Von",
                "GapReport": "Gap",
                "IndustryClassification": "Industrie Segment",
                "IndustryClassificationName": "Industrie Segment Name",
                "IndustryClassifications": "Industrie Segmente",
                "InputParameter": "Eingabe-Parameter",
                "InputParameterName": "Eingabe-Parameter Name",
                "InputParameters": "Eingabe-Parameter",
                "Interviewees": "Teilnehmer",
                "IntroductionHandbook": "Einführungs-Handbuch",
                "KPI": "KPI",
                "KPICategories": "KPI-Kategorien",
                "KPICategory": "KPI-Kategorie",
                "KPIList": "KPI Liste",
                "KPIName": "KPI Name",
                "KPIFormulaError": "Fehlerhafte Formel: {0}",
                "KPIInputParameterDeletionError": "Der Parameter kann nicht entfernt werden, da die Formel dadurch invalide wird: {0}",
                "Language": "Sprache",
                "Level": "Grad",
                "Logout": "Abmelden",
                "MainMenu": "Hauptmenü",
                "MaturityLevel": "Reifegrad",
                "MaturityLevelName": "Reifegrad Name",
                "MaturityLevelSchema": "Reifegrad-Schema",
                "MaturityLevelSchemaName": "Reifegrad-Schema Name",
                "MaturityLevelSchemas": "Reifegrad-Schemas",
                "MasterDataObject": "Stammdaten-Objekt",
                "MasterDataObjectName": "Stammdaten-Objekt Name",
                "MaximumValue": "Maximaler Wert",
                "MinimumValue": "Minimaler Wert",
                "MinimumSelectionError": "Es muss mindestens ein Eintrag gewählt werden",
                "Monitoring": "Monitoring",
                "New": "Neu",
                "NewBenchmarkingInputParameterRange": "Neuer Benchmarking Bereich",
                "NewCapability": "Neue Fähigkeit",
                "NewCase": "Neuer Fall",
                "NewCategory": "Neue Kategorie",
                "NewCompany": "Neue Firma",
                "NewCountry": "Neues Land",
                "NewDeepScan": "Neuer DeepScan",
                "NewDeepScanProjectLegalForm": "Neue Rechtsform",
                "NewDeepScanProjectType": "Neuer Typ",
                "NewIndustryClassification": "Neues Industrie Segment",
                "NewInputParameter": "Neuer Eingabe-Parameter",
                "NewKPI": "Neuer KPI",
                "NewKPICategory": "Neue KPI-Kategorie",
                "NewMaturityLevel": "Neuer Reifegrad",
                "NewMaturityLevelSchema": "Neues Reifegrad-Schema",
                "NewMasterDataObject": "Neues Stammdaten-Objekt",
                "NewOrganisationUnit": "Neue Organisationseinheit",
                "NewPerson": "Neue Person",
                "NewPermissionRole": "Neue Rolle",
                "NewQualitativeQuestion": "Neue Qualitative Frage",
                "NewQuickScan": "Neuer QuickScan",
                "NewSimulation": "Neue Simulation",
                "NewSubprocess": "Neuer Teilprozess",
                "NewSupportProcess": "Neuer Support-Prozess",
                "NewTransactionalDataObject": "Neues Bewegungsdaten-Objekt",
                "NewUnit": "Neue Einheit",
                "NewUser": "Neuer Benutzer",
                "NotSignedIn": "Nicht angemeldet",
                "NoDataError": "Es sind keine Daten vorhanden.",
                "NoPermissionError": "Sie haben keine Berechtigung diese Aktion durchzuführen.",
                "NumberOfDigits": "Anzahl Nachkommastellen",
                "Ok": "OK",
                "OptimalValue": "Optimaler Wert",
                "OrganisationUnit": "Organisationseinheit",
                "OrganisationUnitName": "Organisationseinheit Name",
                "Password": "Passwort",
                "PasswordsDoNotMatchError": "Die beiden Passwörter stimmen nicht überein.",
                "Person": "Person",
                "Persons": "Personen",
                "PermissionRoles": "Rollen",
                "PermissionRole": "Rolle",
                "PermissionRoleName": "Rollen-Name",
                "Phone": "Telefon",
                "PostalCode": "PLZ",
                "Previous": "Zurück",
                "Progress": "Fortschritt",
                "Project": "Projekt",
                "ProjectTarget": "Ziel",
                "QualitativeQuestion": "Qualitative Frage",
                "Question": "Frage",
                "QuestionAnswerTargetLevelGreaterThanActualLevelError": "Soll-Wert muss höher oder gleich dem Ist-Wert sein.",
                "Questions": "Fragen",
                "QuickScan": "QuickScan",
                "RepeatPassword": "Passwort wiederholen",
                "Reports": "Berichte",
                "Salutation": "Anrede",
                "SaveAndNext": "Speichern und Weiter",
                "Search": "Suche",
                "SearchInputLabel": "Suchbegriff", // enter search text
                "ServiceProvider": "Service Provider",
                "ServiceProviderPL": "Service Provider PL",
                "SignedInAs": "Angemeldet als",
                "Simulation": "Simulation",
                "SimulationName": "Simulation Name",
                "SkipAndNext": "Überspringen ohne Speichern",
                "SpiderReport": "Spinne",
                "StartDate": "Startdatum",
                "Street": "Strasse",
                "Subprocess": "Teilprozess",
                "SubprocessName": "Teilprozess Name",
                "SupportProcess": "Support-Prozess",
                "SupportProcessName": "Support-Prozess Name",
                "SupportProcessSelection": "Support-Prozess Auswahl",
                "SupportProcesses": "Support-Prozesse",
                "Target": "Soll-Wert",
                "To": "Bis",
                "TransactionalDataObject": "Bewegungsdaten-Objekt",
                "TransactionalDataObjectName": "Bewegungsdaten-Objekt Name",
                "Translation": "Übersetzung",
                "Translations": "Übersetzungen",
                "Unit": "Einheit",
                "UnitName": "Einheit Name",
                "Units": "Einheiten",
                "User": "Benutzer",
                "Users": "Benutzer",
                "UserPermissionRole": "Benutzer - Rollen",
                "UserProject": "Benutzer - Projekt",
                "de": "Deutsch",
                "en": "Englisch",
            }
        } else {
            return {
                "Actual": "Actual",
                "AddInputParameter": "Add Input Parameter",
                "AddInterviewee": "Add Interviewee",
                "AddSubprocess": "Add Subprocess",
                "AddSupportProcess": "Add Support Process",
                "AddPermissionRole": "Add Role",
                "AddProject": "Add Project",
                "Admin": "Admin",
                "Answer": "Answer",
                "AssessmentReport": "Assessment Report",
                "AssessmentDetailReport": "Assessment Report Details",
                "Back": "Back",
                "BackendFormatError": "Unknown data format: {0}",
                "Background": "Background",
                "Benchmarking": "Benchmarking",
                "BenchmarkingAndSimulation": "Benchmark & Simulation",
                "BenchmarkingInputParameterRange": "Benchmarking Input Parameter Range",
                "BenchmarkingRangeOrderError": "The from/to value order is wrong",
                "BenchmarkingRangeOverlappingError": "Ranges must not not overlap",
                "Cancel": "Cancel",
                "Capability": "Capability",
                "Case": "Case",
                "CaseName": "Case Name",
                "Cases": "Cases",
                "Categories": "Categories",
                "Category": "Category",
                "CategoryName": "Category Name",
                "CategorySelection": "Category Selection",
                "City": "City",
                "ClosingDate": "Closing Date",
                "Comments": "Comments",
                "Companies": "Companies",
                "Company": "Company",
                "CompanyName": "Company Name",
                "CompletenessCheck": "Completeness Check",
                "Configuration": "Configuration",
                "Country": "Country",
                "Countries": "Countries",
                "CountryName": "Country Name",
                "CreationDate": "Creation Date",
                "Customer": "Customer",
                "CustomerPL": "Customer PL",
                "DateOrderError": "The date order is wrong. Please check the dates.",
                "DataReferencedError": "Data is still referenced and cannot be deleted.",
                "DeepScan": "DeepScan",
                "DeepScanProjectLegalForm": "Legal Form",
                "DeepScanProjectLegalForms": "Legal Forms",
                "DeepScanProjectType": "Type",
                "DeepScanProjectTypes": "Types",
                "Definition": "Definition",
                "Delete": "Delete",
                "DeleteWarningQuestion": "Do you really want to delete this item?",
                "Detail": "Detail",
                "DuplicateDataError": "Data already exists and cannot be created.",
                "EMail": "E-Mail",
                "EditCase": "Edit Case",
                "EditCategory": "Edit Category",
                "EditCompany": "Edit Company",
                "EditDeepScan": "Edit DeepScan",
                "EditInputParameter": "Edit Input Parameter",
                "EditInterviewee": "Edit Interviewee",
                "EditKPI": "Edit KPI",
                "EditMaturityLevelSchema": "Edit Maturity Level Schema",
                "EditMasterDataObject": "Edit Master Data Object",
                "EditOrganisationUnit": "Edit Organisation Unit",
                "EditPermissionRole": "Edit Permission Role",
                "EditPerson": "Edit Person",
                "EditQuickScan": "Edit QuickScan",
                "EditSimulation": "Edit Simulation",
                "EditSubprocess": "Edit Subprocess",
                "EditSupportProcess": "Edit Support Process",
                "EditTransactionalDataObject": "Edit Transactional Data Object",
                "EditUser": "Edit User",
                "EmploymentTitle": "Employment Title",
                "EndDate": "End Date",
                "FamilyName": "Family Name",
                "FirstName": "First Name",
                "Formula": "Formula",
                "From": "From",
                "GapReport": "Gap",
                "IndustryClassification": "Industry Classification",
                "IndustryClassificationName": "Industry Classification Name",
                "IndustryClassifications": "Industry Classifications",
                "InputParameter": "Input Parameter",
                "InputParameterName": "Input Parameter Name",
                "InputParameters": "Input Parameters",
                "Interviewees": "Interviewees",
                "IntroductionHandbook": "Introduction Handbook",
                "KPI": "KPI",
                "KPICategories": "KPI Categories",
                "KPICategory": "KPI Category",
                "KPIList": "KPI List",
                "KPIName": "KPI Name",
                "KPIFormulaError": "Error in formula: {0}",
                "KPIInputParameterDeletionError": "The parameter cannot be removed because this invalidates the formula: {0}",
                "Language": "Language",
                "Level": "Level",
                "Logout": "Logout",
                "MainMenu": "Main Menu",
                "MaturityLevel": "Maturity Level",
                "MaturityLevelName": "Maturity Level Name",
                "MaturityLevelSchema": "Maturity Level Schema",
                "MaturityLevelSchemaName": "Maturity Level Schema Name",
                "MaturityLevelSchemas": "Maturity Level Schemas",
                "MasterDataObject": "Master Data Object",
                "MasterDataObjectName": "Master Data Object Name",
                "MaximumValue": "Maximum Value",
                "MinimumValue": "Minimum Value",
                "MinimumSelectionError": "At least one entry must be selected.",
                "Monitoring": "Monitoring",
                "New": "New",
                "NewBenchmarkingInputParameterRange": "New Benchmarking Range",
                "NewCapability": "New Capability",
                "NewCase": "New Case",
                "NewCategory": "New Category",
                "NewCompany": "New Company",
                "NewCountry": "New Country",
                "NewDeepScan": "New DeepScan",
                "NewDeepScanProjectLegalForm": "New Legal Form",
                "NewDeepScanProjectType": "New Type",
                "NewIndustryClassification": "New Industry Classification",
                "NewInputParameter": "New Input Parameter",
                "NewKPI": "New KPI",
                "NewKPICategory": "New KPI Category",
                "NewMaturityLevel": "New Maturity Level",
                "NewMaturityLevelSchema": "New Maturity Level Schema",
                "NewMasterDataObject": "New Master Data Object",
                "NewOrganisationUnit": "New Organisation Unit",
                "NewPermissionRole": "New Permission Role",
                "NewPerson": "New Person",
                "NewQualitativeQuestion": "New Qualitative Question",
                "NewQuickScan": "New QuickScan",
                "NewSimulation": "New Simulation",
                "NewSubprocess": "New Subprocess",
                "NewSupportProcess": "New Support Process",
                "NewTransactionalDataObject": "New Transactional Data Object",
                "NewUnit": "New Unit",
                "NewUser": "New User",
                "NotSignedIn": "Not signed in",
                "NoDataError": "There is no data available.",
                "NoPermissionError": "You do not have permission for this action.",
                "NumberOfDigits": "Number of Digits",
                "Ok": "Ok",
                "OptimalValue": "Optimal Value",
                "OrganisationUnit": "Organisation Unit",
                "OrganisationUnitName": "Organisation Unit Name",
                "Password": "Password",
                "PasswordsDoNotMatchError": "The passwords do not match.",
                "Person": "Person",
                "PermissionRoles": "Permission Roles",
                "PermissionRole": "Permission Role",
                "PermissionRoleName": "Permission Role Name",
                "Persons": "Persons",
                "Phone": "Phone",
                "PostalCode": "Postal Code",
                "Previous": "Previous",
                "Progress": "Progress",
                "Project": "Project",
                "ProjectTarget": "Target",
                "QualitativeQuestion": "Qualitative Question",
                "Question": "Question",
                "QuestionAnswerTargetLevelGreaterThanActualLevelError": "Target level must be higher or equal than actual level.",
                "Questions": "Questions",
                "QuickScan": "QuickScan",
                "RepeatPassword": "Repeat Password",
                "Reports": "Reports",
                "Salutation": "Salutation",
                "SaveAndNext": "Save and Next",
                "Search": "Search",
                "SearchInputLabel": "Enter search text",
                "ServiceProvider": "Service Provider",
                "ServiceProviderPL": "Service Provider PL",
                "SignedInAs": "Signed in as",
                "Simulation": "Simulation",
                "SimulationName": "Simulation Name",
                "SkipAndNext": "Skip and Next",
                "SpiderReport": "Spider Report",
                "StartDate": "Start Date",
                "Street": "Street",
                "Subprocess": "Subprocess",
                "SubprocessName": "Subprocess Name",
                "SupportProcess": "Support Process",
                "SupportProcessName": "Support Process Name",
                "SupportProcessSelection": "Support Process Selection",
                "SupportProcesses": "Support Processes",
                "Target": "Target",
                "To": "To",
                "TransactionalDataObject": "Transactional Data Object",
                "TransactionalDataObjectName": "Transactional Data Object Name",
                "Translation": "Translation",
                "Translations": "Translations",
                "Unit": "Unit",
                "UnitName": "Unit Name",
                "Units": "Units",
                "User": "User",
                "Users": "Users",
                "UserPermissionRole": "User - Permission Roles",
                "UserProject": "User - Project",
                "de": "German",
                "en": "English",
            };
        }
    }
}