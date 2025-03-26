import 'lib/cuil.scss'

import './grid.css'
import './variables.css'

document.querySelector('#root')!.innerHTML = `
<h1 class="heading">HTML Tags Reference Grid</h1>

<div class="tag-grid">
    <h2 class="category-title">Text Content</h2>
    
    <div class="tag-card">
        <div class="tag-name">&lt;h1&gt; to &lt;h6&gt;</div>
        <div class="tag-description">Heading elements</div>
        <div class="tag-example">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
        </div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;p&gt;</div>
        <div class="tag-description">Paragraph</div>
        <div class="tag-example">
          <p>
            This is a paragraph of text. <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;span&gt;</div>
        <div class="tag-description">Inline container</div>
        <div class="tag-example">This is <span>span text</span> in a sentence.</div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;hr&gt;</div>
        <div class="tag-description">Horizontal rule</div>
        <div class="tag-example"><hr></div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;pre&gt;</div>
        <div class="tag-description">Preformatted text</div>
        <div class="tag-example"><pre>function hello() {
  return "world";
}</pre></div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;code&gt;</div>
        <div class="tag-description">Code snippet</div>
        <div class="tag-example"><code>console.log("Hello");</code></div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;blockquote&gt;</div>
        <div class="tag-description">Block quotation</div>
        <div class="tag-example"><blockquote>This is a block quote.</blockquote></div>
    </div>
    
    <h2 class="category-title">Text Formatting</h2>
    
    <div class="tag-card">
        <div class="tag-name">&lt;strong&gt;</div>
        <div class="tag-description">Strong importance</div>
        <div class="tag-example">This is <strong>important text</strong></div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;em&gt;</div>
        <div class="tag-description">Emphasized text</div>
        <div class="tag-example">This is <em>emphasized text</em></div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;mark&gt;</div>
        <div class="tag-description">Marked/highlighted text</div>
        <div class="tag-example">This is <mark>highlighted text</mark></div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;small&gt;</div>
        <div class="tag-description">Smaller text</div>
        <div class="tag-example">This is <small>smaller text</small></div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;del&gt;</div>
        <div class="tag-description">Deleted text</div>
        <div class="tag-example">This is <del>deleted text</del></div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;ins&gt;</div>
        <div class="tag-description">Inserted text</div>
        <div class="tag-example">This is <ins>inserted text</ins></div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;sub&gt;</div>
        <div class="tag-description">Subscript text</div>
        <div class="tag-example">H<sub>2</sub>O</div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;sup&gt;</div>
        <div class="tag-description">Superscript text</div>
        <div class="tag-example">E=mc<sup>2</sup></div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;abbr&gt;</div>
        <div class="tag-description">Abbreviation</div>
        <div class="tag-example"><abbr title="HyperText Markup Language">HTML</abbr> (hover me)</div>
    </div>
    
    <h2 class="category-title">Lists</h2>
    
    <div class="tag-card">
        <div class="tag-name">&lt;ul&gt;</div>
        <div class="tag-description">Unordered list</div>
        <div class="tag-example">
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
        </div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;ol&gt;</div>
        <div class="tag-description">Ordered list</div>
        <div class="tag-example">
            <ol>
                <li>First item</li>
                <li>Second item</li>
            </ol>
        </div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;dl&gt;</div>
        <div class="tag-description">Description list</div>
        <div class="tag-example">
            <dl>
                <dt>Term</dt>
                <dd>Definition</dd>
            </dl>
        </div>
    </div>
    
    <h2 class="category-title">Links and Media</h2>
    
    <div class="tag-card">
        <div class="tag-name">&lt;a&gt;</div>
        <div class="tag-description">Hyperlink</div>
        <div class="tag-example"><a href="#">Link example</a></div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;img&gt;</div>
        <div class="tag-description">Image</div>
        <div class="tag-example"><img src="/api/placeholder/80/50" alt="placeholder"></div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;figure&gt;</div>
        <div class="tag-description">Self-contained content</div>
        <div class="tag-example">
            <figure>
                <img src="/api/placeholder/80/50" alt="placeholder">
                <figcaption>Figure caption</figcaption>
            </figure>
        </div>
    </div>
    
    <h2 class="category-title">Tables</h2>
    
    <div class="tag-card">
        <div class="tag-name">&lt;table&gt;</div>
        <div class="tag-description">Table</div>
        <div class="tag-example">
            <table>
                <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                </tr>
                <tr>
                    <td>Cell 3</td>
                    <td>Cell 4</td>
                </tr>
            </table>
        </div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;tr&gt;</div>
        <div class="tag-description">Table row</div>
        <div class="tag-example">
            <table>
                <tr>
                    <td>Row example</td>
                </tr>
            </table>
        </div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;td&gt;</div>
        <div class="tag-description">Table data cell</div>
        <div class="tag-example">
            <table>
                <tr>
                    <td>Table cell</td>
                </tr>
            </table>
        </div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;th&gt;</div>
        <div class="tag-description">Table header cell</div>
        <div class="tag-example">
            <table>
                <tr>
                    <th>Header cell</th>
                </tr>
            </table>
        </div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;thead&gt;</div>
        <div class="tag-description">Table header group</div>
        <div class="tag-example">
            <table>
                <thead>
                    <tr>
                        <th>Header</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Body</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;caption&gt;</div>
        <div class="tag-description">Table caption</div>
        <div class="tag-example">
            <table>
                <caption>Table Caption</caption>
                <tr>
                    <td>Cell</td>
                </tr>
            </table>
        </div>
    </div>
    
    <h2 class="category-title">Forms</h2>
    
    <div class="tag-card">
        <div class="tag-name">&lt;input&gt;</div>
        <div class="tag-description">Input control</div>
        <div class="tag-example">
            <input type="text" placeholder="Text input"><br>
            <input type="text" placeholder="Erorr text input" error><br>
            <input type="text" placeholder="Disabled text input" disabled><br>
        </div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;button&gt;</div>
        <div class="tag-description">Clickable button</div>
        <div class="tag-example"><button>Click me</button></div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;select&gt;</div>
        <div class="tag-description">Drop-down list</div>
        <div class="tag-example">
            <select>
                <option>Option 1</option>
                <option>Option 2</option>
            </select>
        </div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;optgroup&gt;</div>
        <div class="tag-description">Option group</div>
        <div class="tag-example">
            <select>
                <optgroup label="Group 1">
                    <option>Option 1.1</option>
                </optgroup>
            </select>
        </div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;textarea&gt;</div>
        <div class="tag-description">Multiline text input</div>
        <div class="tag-example"><textarea rows="2" cols="20">Text area</textarea></div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;fieldset&gt;</div>
        <div class="tag-description">Group of controls</div>
        <div class="tag-example">
            <fieldset>
                <legend>Options</legend>
                <label><input type="radio" name="option"> Option 1</label>
            </fieldset>
        </div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;datalist&gt;</div>
        <div class="tag-description">Predefined options</div>
        <div class="tag-example">
            <input list="browsers" placeholder="Choose browser">
            <datalist id="browsers">
                <option value="Chrome">
                <option value="Firefox">
            </datalist>
        </div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;output&gt;</div>
        <div class="tag-description">Calculation result</div>
        <div class="tag-example"><output name="result">Output value</output></div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">&lt;progress&gt;</div>
        <div class="tag-description">Progress indicator</div>
        <div class="tag-example"><progress value="70" max="100"></progress> 70%</div>
    </div>
    
    <h2 class="category-title">Form Input Types</h2>
    
    <div class="tag-card">
        <div class="tag-name">type="checkbox"</div>
        <div class="tag-description">Checkbox input</div>
        <div class="tag-example"><label><input type="checkbox">checkbox</label><br /><label><input type="checkbox" error>checkbox error</label></div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">type="radio"</div>
        <div class="tag-description">Radio input</div>
        <div class="tag-example"><label><input type="radio">radio option</label><br /><label><input type="radio" error>radio error</label></div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">type="number"</div>
        <div class="tag-description">Number input</div>
        <div class="tag-example"><input type="number" placeholder="Number input"></div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">type="date"</div>
        <div class="tag-description">Date input</div>
        <div class="tag-example"><input type="date"></div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">type="time"</div>
        <div class="tag-description">Time input</div>
        <div class="tag-example"><input type="time"></div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">type="range"</div>
        <div class="tag-description">Range slider</div>
        <div class="tag-example"><input type="range" min="0" max="100"></div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">type="color"</div>
        <div class="tag-description">Color picker</div>
        <div class="tag-example"><input type="color"></div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">type="datetime-local"</div>
        <div class="tag-description">Date and time</div>
        <div class="tag-example"><input type="datetime-local"></div>
    </div>
    
    <div class="tag-card">
        <div class="tag-name">button.type="submit"</div>
        <div class="tag-description">Submit button</div>
        <div class="tag-example" style="display: flex; gap: 8px"><button type="submit">Submit</button><button type="submit" valid>Valid</button><button type="submit" error>Error</button></div>
    </div>
</div>
`
