# Company Application Prompt Template

Use this prompt whenever applying to a new company to generate a dedicated, company-tailored portfolio page and update matching resume content.

---

```markdown
I am applying to a new company and need a dedicated executive portfolio page created for them.

Here are the details for this application:

1. **Company Name**: [e.g. Cognizant / Microsoft / Amazon / Deloitte]
2. **Target Role / Title**: [e.g. Senior Azure Data Engineer / Databricks Specialist]

3. **Job Description (JD)**:
```
[Paste Job Description text here]
```

4. **Modified Resume File**:
[Attach or link your actual PDF resume file here]

**Please perform the following tasks**:
1. **Clean Overwrite & Save Resume File**: If a resume file already exists for this company at `public/resumes/Deepak_Kumar_KC_[CompanyName].pdf`, delete it first. Then save the newly provided PDF resume file directly to `public/resumes/Deepak_Kumar_KC_[CompanyName].pdf`.
2. **Clean Overwrite Company Profile Config**: If an entry for this company already exists in `src/data/companyProfiles.ts`, remove the old entry first. Then create a fresh company configuration with:
   - Targeted Executive Role matching the new JD.
   - Natural Welcome Greeting for the hiring team.
   - Customized summary emphasizing the key requirements in the new JD.
   - 4 Key Experience & Competency Alignment Highlights matching the new JD.
   - Resume download link pointing to `/resumes/Deepak_Kumar_KC_[CompanyName].pdf`.
3. **Tailor Portfolio Context & Sections**:
   - Re-order and highlight matching skills, frameworks, and tools in the Skills section for this company.
   - Prioritize matching client projects and case studies from the Experience and Projects sections that directly address the JD's core technical requirements.
4. **Build & Deploy**: Verify the build locally and push the changes to GitHub so my live Vercel URL `https://deepakkumarkc.vercel.app/[companyname]` goes live immediately.
```
